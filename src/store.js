import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

import * as reducers from './reducers';

let finalCreateStore;
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const { devTools, persistState } = require('redux-devtools');
    finalCreateStore = compose(
        applyMiddleware(thunkMiddleware),
        reduxReactRouter({
            createHistory
        }),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
} else {
    finalCreateStore = compose(
        applyMiddleware(thunkMiddleware),
        reduxReactRouter({
            createHistory
        })
    )(createStore);
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default store;
