export const fetchGroup = (groupsUid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let groupsData=[];
        //(1) groupsUid fetch the groups doc name groupsUid
        const firestore = getFirestore();
        groupsUid.map( (groupUid) => {
            return (
                firestore.collection('groups').doc(groupUid).get().then(
                    documentSnapshot => {
                        groupsData =[...groupsData,documentSnapshot.data()]
                    }).then(()=>{
                        dispatch({ type: 'GROUP_ADD',groupsData})
                    }) 
            )
        })
    }
}

export const switchGroup = ( newGroupUid ) => {
    return (dispatch, getState, {getFirestore}) => {
        const userUid = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('users').doc(userUid).update({
            defaultGroup:newGroupUid
        })
        .then(
            dispatch({ type: 'SWITCHGROUP_SUCCESS' })
        ).catch(function(error) {
            dispatch({ type: 'SWITCHGROUP_ERROR',error })
        });
        
    }
}