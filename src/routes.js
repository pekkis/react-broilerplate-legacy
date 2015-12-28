import React from 'react';
import TodoApp from './components/smart/TodoAppContainer';
import IndexPage from './components/smart/IndexPageContainer';
import TodoPage from './components/smart/TodoPageContainer';
import { Route, IndexRoute } from 'react-router';

import { receiveTodos } from './actions/todo-actions';

export default function(store) {

    function hellurei(nextState, replacementState) {

        // const tussi = store.dispatch(receiveTodos());
        // console.log(tussi, 'tussi');

        // setTimeout(() => callback(), 5000);
    };

    return (
        <Route path="/" component={TodoApp} onEnter={hellurei}>
            <IndexRoute component={IndexPage}/>
            <Route path="todo/:uuid" component={TodoPage}/>
        </Route>
    );

};



