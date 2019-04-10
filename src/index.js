import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './components/config/fbConfig'

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    ) 
);
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));


