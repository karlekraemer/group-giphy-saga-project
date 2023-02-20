import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const category = (state = '', action) => {
    if (action.type === 'SET_CATEGORY') {
        return state = action.payload;
    } 
    return state;
}

const favorite = (state = '', action) => {
    if (action.type === 'SET_FAVORITE') {
        return state = action.payload;
    } 
    return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            category,
            favorite
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// need to install react-redux
// enter the new database.sql queries into postico