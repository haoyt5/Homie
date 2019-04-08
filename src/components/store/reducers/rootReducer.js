import authReducer from './authReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
   auth: authReducer,
   firebase: firebaseReducer 
})

export default rootReducer