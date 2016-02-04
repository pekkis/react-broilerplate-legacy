import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { receiveTodos } from './actions/todo-actions';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import TodoPage from './components/container/TodoPageContainer';

export function createRouter({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {

        if (!this.component.fetch) {
            callback();
            return;
        }
        this.component.fetch(store).then(callback);
    }

    function initApp(nextState, replaceState, callback) {
        store.dispatch(receiveTodos()).then(() => {
            callback();
        });
    }

    /*
    function requiresLogin(nextState, replaceState) {
        const user = store.getState().user.get('user');

        if (user.anonymous) {
            replaceState(
                {
                    'next': nextState.location.pathname,
                },
                '/login'
            );
        }
    }
    */

    return (
        <Router history={history}>
            <Route path="/" component={App} onEnter={initApp}>
                <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
                <Route path="todo/:uuid" component={TodoPage}/>
            </Route>
        </Router>
    );
}

