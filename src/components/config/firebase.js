import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAPYaJoMlKsJ6iepxr8uWw4ZE1aPlH6rvI",
    authDomain: "homie-2019.firebaseapp.com",
    databaseURL: "https://homie-2019.firebaseio.com",
    projectId: "homie-2019",
    storageBucket: "homie-2019.appspot.com",
    messagingSenderId: "769792607981"
}
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase