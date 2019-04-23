export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorUid = getState().firebase.auth.uid;
        firestore.collection('tasks').add({
            ...task,
            author: profile.firstname,
            authorUid: authorUid,
            groupUid: profile.defaultGroup,
            category: "{category}",
            createAt: new Date(),
            verification:{
                byOther: [{
                    "checkbox": "false",
                    "reviewerId": "null"
                }],
               byImage: [{
                "checkbox": "false",
                "url": "null"
               }]
            }
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
export const fetchTask = (userUid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        let tasksData = [];
        firestore.collection('users').doc(userUid).get()
        .then( doc => { 
           const { defaultGroup } = doc.data()
           return defaultGroup
        }).then( defaultGroup =>{
            firestore.collection('tasks').where('groupUid', '==', defaultGroup).orderBy('createAt','desc').get()
                .then( querySnapshot => { querySnapshot.forEach( doc => {
                    tasksData = [...tasksData, {id:doc.id,data:doc.data()}]
                }) 
            }).then(() => {
                dispatch({type: 'GET_TASKS', tasksData})
            })
        })
    }
};