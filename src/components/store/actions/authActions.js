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
        }).then(()=>{
            window.location.hash = '#/'
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();        
        console.log( window.location.hash)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: newUser.firstName,
                lastname: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                createAt: firestore.FieldValue.serverTimestamp(),
                photoURL: null
            })
        }).then(()=>{
            firebase.auth().currentUser.updateProfile({
                displayName: newUser.firstName,
                email:newUser.email,
                createAt: firestore.FieldValue.serverTimestamp()
            })
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).then(()=>{
            window.location.hash = '#/signgroup/signup'
        })
        .catch( err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}
export const googleLogin = () =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        console.log('click')
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('result',result)
            if( result.additionalUserInfo.isNewUser ){
                const { user } = result
                const { given_name, family_name,picture,email} = result.additionalUserInfo.profile
                firestore.collection('users').doc(user.uid).set({
                    firstname: given_name,
                    lastname: family_name,
                    initials: given_name[0] + family_name[0],
                    photoURL: picture,
                    email: email,
                    createAt: firestore.FieldValue.serverTimestamp()
                })
                .then(() =>  dispatch({ type: 'LOGIN_SUCCESS' }))
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: 'LOGIN_ERROR'}, err)
                })
            }
          }).catch(function(error) {
            console.log('error',error)
            dispatch({ type: 'LOGIN_ERROR'}, error)
          });
    }
}

export const signInGroup = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const { groupId, groupPassword } = credentials
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        let groupSignInValidate = false;
        let groupUid = null;
        if ( groupId.length === 0 || groupPassword.length === 0 ){
            dispatch({ type: 'SIGNINGROUP_EMPTY'})
            return
        } else {
        //(1)query in group collection to check the group id whether exist or not
            firestore.collection('groups').where( 'groupId', '==', credentials.groupId).get()
            .then( querySnapshot => {
                if( querySnapshot.docs.length === 0 ){
                    dispatch({ type: 'SIGNINGROUP_NOTEXIST'})
                }if(querySnapshot.docs.length === 1){
                    querySnapshot.forEach(doc => {  
                        if(doc.data()){
                            groupUid = doc.id;
                            const{ groupPassword } = doc.data();
                            if ( groupPassword !== credentials.groupPassword){
                                dispatch({ type: 'SIGNINGROUP_ERROR'})
                            }if ( groupPassword === credentials.groupPassword){
                                groupSignInValidate = true
                            }
                        } 
                    })
                } 
            }).then(() => {
                if( groupSignInValidate && userUid ){
        //(2)update the userUid in the members array
                    firestore.collection('groups').doc(groupUid).update({
                        members:firestore.FieldValue.arrayUnion(userUid)
                    }).then(()=>{
        //(3)update the groupUid in the users groups array
                        firestore.collection('users').doc(userUid).update({
                            groupsUid:firestore.FieldValue.arrayUnion(groupUid)
                        })
                    })
                }
            }).then(()=>{
                if(groupSignInValidate && userUid ){
                    dispatch({ type: 'SIGNINGROUP_SUCCESS'})
                }
            }).then(()=>{
                if(groupSignInValidate && userUid){
                    window.location.hash = '#/'
                }
            })
        }
    }
}

export const signUpGroup = (newGroup) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        let groupValidate = true;
        const { groupName, groupId, groupPassword } = newGroup 
        console.log( groupName.length, groupId.length, groupPassword.length)
        if (groupName.length === 0 || groupId.length === 0 || groupPassword.length === 0){
            dispatch({ type: 'SIGNINGROUP_EMPTY'})
            return
        } else {
        //(1) Check the groupId whether exist or not
            firestore.collection('groups').where( 'groupId', '==' , newGroup.groupId ).get()
            .then( querySnapshot => {
                querySnapshot.forEach(doc =>{
                    if(doc.data()){
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
                    ).then(()=>{
                        window.location.hash = '#/'
                    })
                }
            })
        }
    }
}
