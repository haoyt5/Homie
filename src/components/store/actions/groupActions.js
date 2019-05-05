export const fetchGroupList = (groupsUid) => {
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

export const fetchGroupDetails = (userUid) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        let groupData;
        if(userUid){

            firestore.collection('users').doc(userUid).get()
            .then(doc => { 
                const defaultGroup  = doc.data().defaultGroup || null
                return defaultGroup
            })
            .then( defaultGroup => { 
                if(defaultGroup){
                    firestore.collection('groups').doc(defaultGroup).get()
                    .then( doc => {
                        groupData = doc.data()
                    }).then(()=>{
                        dispatch({type: 'GET_GROUP', groupData})
                    })
                }else{
                    dispatch({type: 'GET_GROUP_EMPTY'})
                }
            })
        }else{
            console.log('EMPTY')
            dispatch({type: 'GET_GROUP_EMPTY'})
        }


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