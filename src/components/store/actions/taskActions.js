import { storage } from '../../config/fbConfig';
export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorUid = getState().firebase.auth.uid;
        // console.log(task)
        firestore.collection('tasks').add({
            ...task,
            author: profile.firstname,
            authorUid: authorUid,
            groupUid: profile.defaultGroup,
            createAt: new Date(),
            verification:{
                byOther: [{
                    "checkbox": "false",
                    "reviewerId": null
                }],
               byImage: [{
                "checkbox": "false",
                "url": null
               }]},
            assign:{assignedTo:null,assignedAt:null},
            approve:{verifiedBy:null,verifiedAt:null},
            lastUpdateAt:firestore.FieldValue.serverTimestamp(),
            status:"unassigned"
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', task })
        }).then(() => {
            window.location.hash = '#/'
        })
        .catch((err)=>{
            dispatch({ type: 'CREATE_TASK_ERROR', err })
        })
    }
};
export const fetchTask = (taskUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        let taskData;
        firestore.collection('tasks').doc(taskUid).get()
        .then(doc => {
            taskData = {id:doc.id,data:doc.data()}
        })
        .then(() => {
            dispatch({type: 'GET_TASK', taskData})
        })
    }
};
export const fetchTaskList = (userUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        let tasksData = []
        let unassignedTasksData = []
        let assignedTasksData = []
        let pendingTasksData = []
        firestore.collection('users').doc(userUid).get()
        .then( doc => { 
           const  defaultGroup  = doc.data().defaultGroup || null
           return defaultGroup
        }).then( defaultGroup => {
            if (defaultGroup) {
                firestore.collection('tasks').where('groupUid', '==', defaultGroup).orderBy('lastUpdateAt','desc').get()
                .then( querySnapshot => { querySnapshot.forEach( doc => {
                    tasksData = [...tasksData, {id:doc.id,data:doc.data()}]
                    }) 
                })
                .then(() => {
                    firestore.collection('tasks').where('groupUid', '==', defaultGroup).where('status','==','unassigned').orderBy('lastUpdateAt','desc').get()
                    .then( querySnapshot => { querySnapshot.forEach( doc => {
                        unassignedTasksData = [...unassignedTasksData, {id:doc.id,data:doc.data()}]
                        })
                    }).then(() => {
                        firestore.collection('tasks').where('groupUid', '==', defaultGroup).where('status','==','assigned').orderBy('lastUpdateAt','desc').get()
                        .then( querySnapshot => { querySnapshot.forEach( doc => {
                            assignedTasksData = [...assignedTasksData, {id:doc.id,data:doc.data()}]
                            })
                        }).then(()=>{
                            firestore.collection('tasks').where('groupUid', '==', defaultGroup).where('status','==','pending').orderBy('lastUpdateAt','desc').get()
                            .then( querySnapshot => { querySnapshot.forEach( doc => {
                                pendingTasksData = [...pendingTasksData, {id:doc.id,data:doc.data()}]
                                })
                                
                            }).then(()=>{ 
                                dispatch({type: 'GET_TASKS',
                                tasksData,
                                unassignedTasksData,
                                assignedTasksData,
                                pendingTasksData
                                })
                            })
                        })
                    })
                })
                
            }
        })
    }
};
export const acceptTask = (taskUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const userUid = getState().firebase.auth.uid
        const userName = getState().firebase.profile.firstname
        const groupUid = getState().firebase.profile.defaultGroup;
        //(1) update the task doc with the status and the assign field
        //(2) update the user doc accept the task
        firestore.collection('tasks').doc(taskUid).update({
            assign:{assignedAt:firestore.FieldValue.serverTimestamp(),
                    assignedTo:userName,
                    assignedToUid:userUid},
            lastUpdateAt:firestore.FieldValue.serverTimestamp(),
            status: 'assigned'
        }).then(() => {
            firestore.collection('users').doc(userUid).update({
                [`beAssignedTo.${groupUid}`]:firestore.FieldValue.arrayUnion(taskUid)
            })
        }).then(() => {
            window.location.hash = '#/'
        })

    }
};
export const closeTask = (taskUid, assign ,file) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const groupUid = getState().firebase.profile.defaultGroup;
        const userUid = getState().firebase.auth.uid
        const { assignedToUid } = assign

        //(1) update the task doc with the status to pending
        //(2) update the user doc remove taskUid from the beAssignedTo and add it to the pendding
        //(*) Error Handling check if contain the image or not
        // console.log(firebase.uploadedFile())
        // console.log(taskUid, assign,file)
        // console.log(file)
        if( userUid === assignedToUid ) {
            if(file ) {
                console.log('OKOK')
                const storageRef = storage.ref(`task_images/${taskUid}`)
                const mainImage = storageRef.child(file.name)
                mainImage.put(file)
                .then((UploadTaskSnapshot)=>{
                    console.log(UploadTaskSnapshot)
                    mainImage.getDownloadURL()
                    .then( ( imageurl )=> {
                        firestore.collection('tasks').doc(taskUid).update({
                            lastUpdateAt:firestore.FieldValue.serverTimestamp(),
                            finishAt:firestore.FieldValue.serverTimestamp(),
                            status: 'pending',
                            pendingImgURL: imageurl
                            
                        }).then(() => {
                            firestore.collection('users').doc(userUid).update({
                                [`beAssignedTo.${groupUid}`]:firestore.FieldValue.arrayRemove(taskUid),
                                [`pending.${groupUid}`]:firestore.FieldValue.arrayUnion(taskUid)
                            })
                        }).then(() => {
                            window.location.hash = '#/'
                        })
                    }).catch(err=>{
                        console.log(err)
                        alert('upload failed, please try again')
                    })
                }).catch(err=>{
                    console.log(err)
                    alert('upload failed, please try again')
                })

            }else{
                alert('沒有上傳圖片')
            }
        } else {
            alert('It is an invalid action')
            return
        }

        // if( userUid === assignedToUid ) {
        //     firestore.collection('tasks').doc(taskUid).update({
        //         lastUpdateAt:firestore.FieldValue.serverTimestamp(),
        //         finishAt:firestore.FieldValue.serverTimestamp(),
        //         status: 'pending'
        //     }).then(() => {
        //         firestore.collection('users').doc(userUid).update({
        //             [`beAssignedTo.${groupUid}`]:firestore.FieldValue.arrayRemove(taskUid),
        //             [`pending.${groupUid}`]:firestore.FieldValue.arrayUnion(taskUid)
        //         })
        //     }).then(() => {
        //         window.location.hash = '#/'
        //     })
            
        // } else {
        //     alert('It is an invalid action')
        //     return
        // }
    }
}
export const approveTask = (taskUid, assign) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // console.log('the non-assigned user approve the task to turn into complete')
        // console.log(taskUid, assign)
        const firestore = getFirestore()
        const groupUid = getState().firebase.profile.defaultGroup
        const userName = getState().firebase.profile.firstname
        const userUid = getState().firebase.auth.uid
        const { assignedToUid } = assign
        //(1) update the task doc with the status to complete
        //(2) update the user doc remove taskUid from the pending and add it to the finish
        //(*) Error Handling check if contain the image or not
        if( userUid !== assignedToUid ) {
            console.log('可以寫')
            firestore.collection('tasks').doc(taskUid).update({
                lastUpdateAt:firestore.FieldValue.serverTimestamp(),
                status: 'complete',
                approve:{approvedAt:firestore.FieldValue.serverTimestamp(),
                         approvedBy:userName,
                         approvedByUid:userUid},
            }).then(() => {
                firestore.collection('users').doc(assignedToUid).update({
                    [`pending.${groupUid}`]:firestore.FieldValue.arrayRemove(taskUid),
                    [`finish.${groupUid}`]:firestore.FieldValue.arrayUnion(taskUid)
                })
            }).then(() => {
                window.location.hash = '#/'
            })
            
        } else {
            alert('It is an invalid action')
            return
        }
    }
}