var port = 8888;

import uuid from 'node-uuid';
import { List } from 'immutable';

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');
var bodyParser = require('body-parser')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json())

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
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});

