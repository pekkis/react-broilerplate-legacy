import store from './store';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import React from 'react';

import createRoutes from './routes';
const routes = createRoutes(store);

import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { Router, RoutingContext } from 'react-router';

import webpack from 'webpack';

import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';

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
  //require('./server'

    const path = '/';

    // Set up history for router:
    const history = useQueries(createMemoryHistory)();
    const location = history.createLocation(path);

    match({ routes, location: location }, (error, redirectLocation, renderProps) => {


        // console.log(error, 'error');

        // console.log(redirectLocation, 'redir');

        // console.log(renderProps, 'renderprops');

        const fetchers = renderProps.routes
            .map(route => route.component)
            .filter(component => component.fetch)
            .map(component => component.fetch);

        console.log(fetchers);

        const params = {
            path: renderProps.location.pathname,
            query: renderProps.location.query,
            params: renderProps.params,
            dispatch: store.dispatch
        };

        Promise.all(
            fetchers.map(fetcher => fetcher(params))
        ).then(promises => {

            console.log(store.getState());

            const html = renderToString(
                <Provider store={store}>
                <RoutingContext {...renderProps} />
                </Provider>
            );
        // console.log(renderProps.components);

            console.log(html);


        }).catch(e => {
            console.log(e);
        })

        // console.log(Promise.all);

        // console.log(components);


    });

});
