
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory as history } from 'react-router';
import { createStore } from './util/redux';
import { createApp } from './util/app';

import * as reducers from './reducers';
import { createRouter } from './router';

const store = createStore(reducers, history);

const router = createRouter({
    store,
    history
});

const app = createApp(store, history, router);

ReactDOM.render(
    app,
    document.getElementById('app')
);

