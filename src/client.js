import './client.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import SensorApp from './components/smart/SensorAppContainer';
import IndexPage from './components/smart/IndexPageContainer';

import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

const app = (
    <Provider store={store}>
        <Router history={createHistory()}>
            <Route path="/" component={SensorApp}>
                <IndexRoute component={IndexPage}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('app')
);


