import rootReducer from '../components/store/reducers/rootReducer'
import { createStore } from '../../../../Library/Caches/typescript/3.4.3/node_modules/redux';

/**  Create a testing store with imported reducers, middleware, and initial state.
*   globals: rootReducer
* param {object}  initState - Initial state for store
* function storeFactory
* return {store} - Redux store
*/ 

export const storeFactory = (initState) => {
    return createStore(rootReducer, initState);
}