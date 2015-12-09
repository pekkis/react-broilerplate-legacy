import './client.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import TodoApp from './components/smart/TodoAppContainer';
import IndexPage from './components/smart/IndexPageContainer';
import TodoPage from './components/smart/TodoPageContainer';

import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

const app = (
    <Provider store={store}>
        <Router history={createHistory()}>
            <Route path="/" component={TodoApp}>
                <IndexRoute component={IndexPage}/>
                <Route path="todo/:uuid" component={TodoPage}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('app')
);


