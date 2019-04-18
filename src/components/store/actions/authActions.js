export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: newUser.firstName,
                lastname: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                groupsId:[]
                
            })
        }).then(() =>{
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch( err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }

}
export const signInGroup = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //(3)update the userUid in the members array
        //(4)update the groupUid in the users groups array

        const firestore = getFirestore();
        //(1)query in group collection to check whether the group id whether exist or not
        firestore.collection('groups').where( 'groupId', '==', credentials.groupId).get()
        .then( querySnapshot => {
            if( querySnapshot.docs.length === 0 ){
                dispatch({ type: 'SIGNINGROUP_NOTEXIST'})
            }if(querySnapshot.docs.length === 1){
                querySnapshot.forEach(doc => {  
                    if(doc.data()){
                        const{ groupPassword } = doc.data();
                        console.log(doc.data())
                        console.log(groupPassword)
                        if ( groupPassword !== credentials.groupPassword){
                            dispatch({ type: 'SIGNINGROUP_ERROR'})
                        }if ( groupPassword === credentials.groupPassword){
                            console.log('signin the group')
                        }
                    }
                      
                })
            } 
        })
    }
}
export const signUpGroup = (newGroup) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        let groupValidate = true;
        //(1) Check if the groupId whether exist or not
        firestore.collection('groups').where( 'groupId', '==' , newGroup.groupId ).get()
        .then( querySnapshot => {
            querySnapshot.forEach(doc =>{
                if(doc.data()){
                    // console.log(doc.id, doc.data())
                    groupValidate = false
                }
            })
        }).then( () =>{
            if( !groupValidate){
                dispatch({ type: 'SIGNUPGROUP_ERROR'})
            }if( groupValidate ){
        //(2)If it is new groupId update the members array in the firestorecollection('groups') with the form information groupName, groupId, groupPassword, members userUid
                firestore.collection('groups').add({
                    ...newGroup,
                    members:firestore.FieldValue.arrayUnion(userUid)
                }).then(resp => {
         //(3)update to the user database with the groupUid
                    let groupUid = resp.id
                    firestore.collection('users').doc(userUid).update({
                        groupsUid:firestore.FieldValue.arrayUnion(groupUid)
                    })
                }).then(
                    dispatch({ type: 'SIGNUPGROUP_SUCCESS'})
                )
            }
        })
    }
}
