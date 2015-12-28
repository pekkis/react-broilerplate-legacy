import store from './store';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import React from 'react';

import createRoutes from './routes';
const routes = createRoutes(store);

import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import webpack from 'webpack';


var Webpack_isomorphic_tools = require('webpack-isomorphic-tools')

// this must be equal to your Webpack configuration "context" parameter
var project_base_path = require('path').resolve(__dirname, '..')

// this global variable will be used later in express middleware
global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(require('../webpack-isomorphic'))
// enter development mode if needed
// (you may also prefer to use a Webpack DefinePlugin variable)
.development(process.env.NODE_ENV === 'development')
// initializes a server-side instance of webpack-isomorphic-tools
// (the first parameter is the base path for your project
//  and is equal to the "context" parameter of you Webpack configuration)
// (if you prefer Promises over callbacks
//  you can omit the callback parameter
//  and then it will return a Promise instead)
.server(project_base_path, function()
{
  // webpack-isomorphic-tools is all set now.
  // here goes all your web application code:
  //require('./server')


    const history = createHistory();

    console.log(history);


    const app = (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );

    const content = renderToString(app);

    console.log(content);




});







/*
match({ routes, location: '/' }, (error, redirectLocation, renderProps) => {

    console.log(error, 'error');

    console.log(redirectLocation, 'redir');

    // console.log(renderProps, 'renderprops');

    console.log(renderProps.components);

    const content = renderToString(renderProps.components[0]);


    /*
    const content = renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );

    console.log(content);
    */


    /*
    if (error) {
res.status(500).send(error.message)
} else if (redirectLocation) {
res.redirect(302, redirectLocation.pathname + redirectLocation.search)
} else if (renderProps) {
res.status(200).send(renderToString(<RouterContext {...renderProps} />))
} else {
res.status(404).send('Not found')
}


});
*/

