import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { receiveTodos } from './actions/todo-actions';
import TodoApp from './components/container/TodoAppContainer';
import IndexPage from './components/container/IndexPageContainer';
import TodoPage from './components/container/TodoPageContainer';

export function createRoutes({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {

        if (!this.component.fetch) {
            callback();
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
        <Route path="/" component={TodoApp}>
            <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
            <Route path="todo/:uuid" component={TodoPage}/>
        </Route>
    );

}

