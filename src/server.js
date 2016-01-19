import uuid from 'node-uuid';
import { List } from 'immutable';

import { createServer } from './util/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';

createServer(config, webpackConfig, (app) => {

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


});

