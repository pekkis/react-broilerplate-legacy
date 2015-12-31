import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { routeReducer } from 'redux-simple-router';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const reducer = combineReducers({
    ...reducers,
    routing: routeReducer

});
const store = createStoreWithMiddleware(reducer);

export default store;
