import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './index';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
// import isDev  from 'electron-is-dev';
import { ApplicationMiddleware } from './application/application.middleware';
import { RegistrationMiddleware } from './registration/registration.middleware';

export const create = (history) => {
    const reducer = combineReducers({ ...reducers, router: routerReducer});
    const middleware = [
        thunk,
        reduxLogger,
        routerMiddleware(history),
        ApplicationMiddleware,
        RegistrationMiddleware,
    ];

    return createStore(
        reducer,
        applyMiddleware(...middleware)
    );
};