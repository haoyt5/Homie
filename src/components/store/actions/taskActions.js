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
                    "reviewerId": "null"
                }],
               byImage: [{
                "checkbox": "false",
                "url": "null"
               }]},
            assign:{assignedTo:"null",assignedAt:""},
            verify:{verifiedBy:"null",verifiedAt:""},
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
            // console.log(doc.data())
            taskData = {id:doc.id,data:doc.data()}
        })
        .then(() => {
            console.log(taskData)
            dispatch({type: 'GET_TASK', taskData})
        })
    }
};
export const fetchTaskList = (userUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        let tasksData = [];
        let unassignedTasksData = [];
        let assignedTasksData = []
        firestore.collection('users').doc(userUid).get()
        .then( doc => { 
           const { defaultGroup } = doc.data()
           return defaultGroup
        }).then( defaultGroup => {
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
                    }).then(() => {
                        console.log(assignedTasksData)
                        dispatch({type: 'GET_TASKS',
                        tasksData,
                        unassignedTasksData,
                        assignedTasksData
                        })
                    })
                })
            })
        })
    }
};
export const acceptTask = (taskUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const userUid = getState().firebase.auth.uid
        const groupUid = getState().firebase.profile.defaultGroup;
        //(1) update the task doc with the status and the assign field
        //(2) update the user doc accept the task
        firestore.collection('tasks').doc(taskUid).update({
            assign:{assignedAt:firestore.FieldValue.serverTimestamp(),
                    assignedTo:userUid},
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