import uuid from 'node-uuid';
import { List } from 'immutable';

import express from 'express';
import webpack from 'webpack';

import config from '../webpack.config.babel';
import bodyParser from 'body-parser';

import store from './store';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes';
import React from 'react';

import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';


const app = express();
const compiler = webpack(config);
const port = 8888;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());

let todos = List.of(
    {
        id: uuid.v4(),
        text: 'Get 100 litres of battery acid',
        done: true,
        category: 0
    },
    {
        id: uuid.v4(),
        text: 'Get gardening tools',
        done: true,
        category: 0
    },
    {
        id: uuid.v4(),
        text: 'Carve up the "meat"',
        done: false,
        category: 0
    },
    {
        id: uuid.v4(),
        text: 'Liquidate the pieces',
        done: false,
        category: 0
    },
    {
        id: uuid.v4(),
        text: 'Dump the acid in the Danube',
        done: false,
        category: 1
    }
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/todo', function(req, res, next) {

    setTimeout(
        function() {
            res.send(todos.toJS());
        },
        Math.random() * 3
    );
});

app.post('/api/todo', function(req, res, next) {
    todos = List(req.body);
    res.send(['ok']);
});

app.get('*', function(req, res, next) {

    const history = createHistory();
    const app = (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );

    const content = renderToString(app);

    console.log(content);

    res.send(content);

  // res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});

