import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import HelloWorldApp from './components/HelloWorldApp';
import Index from './components/Index';
import Greeter from './components/Greeter';

import { Router, Route, Link, IndexRoute } from 'react-router';

const routes = (
    <Router>
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
