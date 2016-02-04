import React from 'react';
import { Provider } from 'react-redux';

export function createApp(store, history, router) {

    const app = (
        <Provider store={store}>
            {router}
        </Provider>
    );

    return app;
}
