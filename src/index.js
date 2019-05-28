import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './components/config/fbConfig'

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig,{ useFirestoreForProfile:true,
                                      userProfile: 'users',
                                      attachAuthIsReady: true,
                                      firebaseStateName: 'firebase'})
    ) 
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
})
// ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));


