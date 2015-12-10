var port = 8888;

import uuid from 'node-uuid';
import { List } from 'immutable';
import moment from 'moment';

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var bodyParser = require('body-parser')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json())

let sensors = List.of(
    {
        id: uuid.v4(),
        name: "Humidity sensor in Jarmo's basement",
        measurements: List.of(
            {
                value: 50.5,
                unit: '%',
                timestamp: moment('2015-01-01')
            },
            {
                value: 100,
                unit: '%',
                timestamp: moment()
            }
        )
    }
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/sensor', function(req, res, next) {
    res.send(sensors);
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

