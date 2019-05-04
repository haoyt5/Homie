const randomColor = require('randomcolor');
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).then(() => {
            window.location.hash = '#/'
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
        let randomcolor = randomColor({luminosity: 'bright'}); 
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
                photoURL: null,
                userColor:randomcolor
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
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();
        let randomcolor = randomColor({luminosity: 'bright'}); 
        firebase.auth().signInWithPopup(provider)
        .then((result)=> {
            console.log(result)
            const {  given_name,family_name, picture,email} = result.additionalUserInfo.profile
            if( result.additionalUserInfo.isNewUser ){
                const { user } = result

                firestore.collection('users').doc(user.uid).set({
                    firstname: given_name || '',
                    lastname: family_name || '',
                    initials:  given_name[0] || '' +  family_name[0] || '',
                    photoURL: picture,
                    email: email,
                    createAt: firestore.FieldValue.serverTimestamp(),
                    userColor:randomcolor
                })
                .then(() =>  window.location.hash = '#/signgroup/signup' )
                .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: 'LOGIN_ERROR'}, err)
                })
            } else {
                firestore.collection('users').where('email','==',email).get()
                .then( querySnapshot => {
                    querySnapshot.forEach( doc => {
                        const defaultGroup = doc.data().defaultGroup || null
                        if (defaultGroup){
                            console.log(defaultGroup)
                            dispatch({ type: 'LOGIN_SUCCESS' })
                            window.location.hash = '#/'
                        } else {
                            console.log(defaultGroup)
                            dispatch({ type: 'LOGIN_SUCCESS' })
                            window.location.hash = '#/signgroup/signup'
                        }  
                    })
                })
                dispatch({ type: 'LOGIN_SUCCESS' })
            }
          }).catch(function(error) {
            console.log('error',error)
            dispatch({ type: 'LOGIN_ERROR', error})
          });
    }
}

export const signInGroup = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const { groupId, groupPassword } = credentials
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        let groupSignInValidate = false;
        let groupUid = null;
        console.log('click')
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
                            const{ members, groupPassword } = doc.data();
                            if ( groupPassword !== credentials.groupPassword){
                                dispatch({ type: 'SIGNINGROUP_ERROR'})
                            }if ( groupPassword === credentials.groupPassword){
                                if(members.indexOf(userUid)=== -1){
                                    groupSignInValidate = true
                                }else{
                                    dispatch({ type: 'SIGNINGROUP_ERROR_EXIST'})
                                }
                            }
                        } 
                    })
                } 
            }).then(() => {
                if( groupSignInValidate && userUid ){
        //(2)update the userUid in the members array
                    firestore.collection('groups').doc(groupUid).update({
                        [`pointsRecord.${userUid}`]:{firstname:profile.firstname,userColor:profile.userColor || null,points:0,userUid:userUid},
                        members:firestore.FieldValue.arrayUnion(userUid),
                        [`membersInfo.${userUid}`]:{firstname:profile.firstname,userColor:profile.userColor|| null,photoURL:`${profile.photoURL}` ||  null ,userUid:userUid}
                    }).catch(err => console.log(err))
                }
            }).then(()=>{
                //(3)update the groupUid in the users groups array
                if(groupSignInValidate && userUid ){
                    firestore.collection('users').doc(userUid).update({
                                groupsUid:firestore.FieldValue.arrayUnion(groupUid),
                                defaultGroup: groupUid
                            }).catch(err => console.log(err))
                }

            }).then(()=>{
                if(groupSignInValidate && userUid ){
                    dispatch({ type: 'SIGNINGROUP_SUCCESS'})
                }
            }).then(()=>{
                if(groupSignInValidate && userUid){
                    window.location.hash = '#/'
                }
            }).catch(err => console.log(err))
        }
    }
}

export const signUpGroup = (newGroup) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        let groupValidate = true;
        const { groupName, groupId, groupPassword } = newGroup 
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
                            groupsUid:firestore.FieldValue.arrayUnion(groupUid),
                            defaultGroup: groupUid
                        })
                        firestore.collection('groups').doc(groupUid).update({
                            groupUid: groupUid,
                            [`pointsRecord.${userUid}`]:{firstname:profile.firstname,userColor:profile.userColor||null,points:0,userUid:userUid},
                            [`membersInfo.${userUid}`]:{firstname:profile.firstname,userColor:profile.userColor||null,photoURL:`${profile.photoURL}` ||  null ,userUid:userUid}
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
const pullAtValue = (arr, pullArr) => {
    let removed = [],
      pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
      mutateTo = arr.filter((v, i) => !pullArr.includes(v));
    arr.length = 0;
    mutateTo.forEach(v => arr.push(v));
    return removed;
  };
export const leaveGroup = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userUid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        const { defaultGroup, groupsUid } = getState().firebase.profile;
        let newDefaultGroup = null;
        let noDefaultGroup = false
        if (defaultGroup){ 
            firestore.collection('groups').doc(defaultGroup).update({
                members:firestore.FieldValue.arrayRemove(userUid),
                [`membersInfo.${userUid}`]:firestore.FieldValue.delete(),
                [`pointsRecord.${userUid}`]:firestore.FieldValue.delete(),
            }).then(()=>{
                if (groupsUid === 1){
                    noDefaultGroup = true
                } else {
                    pullAtValue(groupsUid,defaultGroup)
                    newDefaultGroup = groupsUid.pop()
                }
            }).then(()=>{
                firestore.collection('users').doc(userUid).update({
                    groupsUid:firestore.FieldValue.arrayRemove(defaultGroup),
                    defaultGroup: newDefaultGroup
                })
            }).then(()=>{
                if (noDefaultGroup){
                    window.location.hash = '#/signgroup/signin'
                }else{
                    window.location = '/'
                }
            })
        } else {
            return 
        }
    }
}