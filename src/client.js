import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import HelloWorldApp from './components/HelloWorldApp';
import Index from './components/Index';
import Greeter from './components/Greeter';

import { Router, Route, Link, IndexRoute } from 'react-router';

import { createHistory } from 'history';
const history = createHistory();

const routes = (
    <Router history={history}>

        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
