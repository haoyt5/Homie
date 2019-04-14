export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorUid = getState().firebase.auth.uid;
        firestore.collection('tasks').add({
            ...task,
            author: profile.firstname,
            authorUid: authorUid,
            grouprUid: "{groupUid}",
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
        }).catch((err)=>{
            dispatch({ type: 'CREATE_TASK_ERROR', err })
        })
    }
};