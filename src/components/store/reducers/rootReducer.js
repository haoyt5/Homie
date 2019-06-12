import authReducer from './authReducer'
import taskReducer from './taskReducer'
import groupReducer from './groupReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
   auth: authReducer,
   task: taskReducer,
   group: groupReducer,
   firestore: firestoreReducer,
   firebase: firebaseReducer 
})

export default rootReducer