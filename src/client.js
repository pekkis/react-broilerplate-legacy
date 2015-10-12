require('./client.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';

import SlimerApp from "./components/SlimerApp";
// Router could do this paske by itself nowadays, I think...
import Home from "./components/smart/HomeContainer";

import store from './store';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

const provider = (
    <Provider store={store}>
        <ReduxRouter>
            <Redirect from="/" to="/home" />
            <Route component={SlimerApp} path="/">
                <Route name="home" component={Home} path="/home" />
            </Route>
        </ReduxRouter>
    </Provider>
);

let rootElement = provider;

if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    rootElement = (
        <div>
            {provider}
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </div>
    );
}

ReactDOM.render(rootElement, document.getElementById('app'));
