require('./client.css');

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/smart/TodoAppContainer';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);

