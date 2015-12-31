import './client.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { createHistory } from 'history';

import { createStore } from './broilerplate/redux';
import { createApp } from './broilerplate/app';

import * as reducers from './reducers';

import { createRoutes } from './routes';

const history = createHistory();
const store = createStore(reducers, history);

const routes = createRoutes({
    store,
    history
});

const app = createApp(store, history, routes);

ReactDOM.render(
    app,
    document.getElementById('app')
);

