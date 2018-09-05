import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { create as createStore } from './store/store';
import { initApplication } from './store/application/application.actions';
import App from './pages/app';

const history = createBrowserHistory();
const store = createStore(history);

const onRenderComplete = () => {
    store.dispatch(initApplication());
};

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
    onRenderComplete,
);
