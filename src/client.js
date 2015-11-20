import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Redux or changes caused by Redux
import store from './store';
import { Provider } from 'react-redux';
import TodoApp from "./components/smart/TodoAppContainer";

const app = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

let rootElement = app;

if (__DEVELOPMENT__ && __DEVTOOLS__) {

    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    rootElement = (
        <div>
            {app}
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </div>
    );
}

ReactDOM.render(
    rootElement,
    document.getElementById('app')
);
