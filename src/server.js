import uuid from 'node-uuid';
import { List } from 'immutable';

import { createServer } from './util/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';

createServer(config, webpackConfig, (app) => {

    app.use(bodyParser.json());

    let todos = List.of(
        {
            id: uuid.v4(),
            text: 'Get 100 litres of battery acid',
            category: 0
        },
        {
            id: uuid.v4(),
            text: 'Get gardening tools',
            category: 0
        },
        {
            id: uuid.v4(),
            text: 'Carve up the "meat"',
            category: 0
        },
        {
            id: uuid.v4(),
            text: 'Liquidate the pieces',
            category: 0
        },
        {
            id: uuid.v4(),
            text: 'Dump the acid in the Danube',
            category: 1
        }
    );

    app.get('/api/todo', function(req, res, next) {

        setTimeout(
            function() {
                res.send(todos.toJS());
            },
            Math.random() * 300
        );
    });

    app.post('/api/todo', function(req, res, next) {
        todos = List(req.body);
        res.send(['ok']);
    });


});

