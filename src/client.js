import './client.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const history = createHistory();

import routes from './routes';

const app = (
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('app')
);


