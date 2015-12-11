var port = 8888;

import uuid from 'node-uuid';
import { List, Map } from 'immutable';
import moment from 'moment';
import config from './config';

import Random from "random-js";

const messagebird = require('messagebird')(config.apiKey);

const r = new Random(Random.engines.mt19937().autoSeed());

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var _config = require('../webpack.config.dev');
var bodyParser = require('body-parser')

var app = express();
var compiler = webpack(_config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: _config.output.publicPath
}));

app.use(bodyParser.json())

let sensors = Map({
    basement: {
        id: 'basement',
        name: "Basement",
        measurements: List.of(
            {
                value: 77.01,
                unit: '%',
                timestamp: moment('1980-01-01')
            },
            {
                value: 77.03,
                unit: '%',
                timestamp: moment('2000-01-01')
            }
        )
    },
    walma: {
        id: 'walma',
        name: "Walma's room",
        measurements: List.of(
            {
                value: 35,
                unit: '%',
                timestamp: moment('2015-01-01')
            },
            {
                value: 15,
                unit: '%',
                timestamp: moment()
            }
        )
    },
    library: {
        id: 'library',
        name: "Library",
        measurements: List.of(
            {
                value: 50,
                unit: '%',
                timestamp: moment('2015-01-01')
            },
            {
                value: 49.4,
                unit: '%',
                timestamp: moment()
            }
        )
    }
});


let measurements = List();

function generateMeasurement() {

    const ids = sensors.map(sensor => sensor.id).toList().toJS();

    const id = r.pick(ids);

    const latestMeasurement = sensors
        .get(id)
        .measurements
        .sort(m => m.timestamp)
        .first();

    const newMeasurement = {
        id: id,
        value: latestMeasurement.value + 1,
        unit: latestMeasurement.unit,
        timestamp: moment()
    };

    sensors = sensors.update(
        id,
        sensor => {
            sensor.measurements = sensor.measurements.push(newMeasurement);
            return {
                ...sensor
            };
        }
    );

    measurements = measurements.push(newMeasurement);

}

setInterval(generateMeasurement, 5000);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/sensor', function(req, res, next) {
    res.send(sensors);
});

app.get('/api/measurement', function(req, res, next) {

    res.send(measurements);
    measurements = List();
});

app.post('/api/notify/:id', function(req, res, next) {

    res.send('ok');
    if (!config.send) {
        return;
    }

    const sensor = sensors.get(req.params.id);
    const params = {
        'originator': 'Humidor',
        'recipients': [
            config.tel
        ],
        'body': sensor.name + ' says: "I am too humid!"'
    };

    messagebird.messages.create(params, function (err, response) {
        if (err) {
        return console.log(err);
        }
        console.log(response);
    });

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

