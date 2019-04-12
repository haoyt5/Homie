export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
            author: "{Name}",
            authorUid: "{Uid}",
            grouprUid: "{groupUid}",
            category: "{category}",
            creatAt: new Date(),
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