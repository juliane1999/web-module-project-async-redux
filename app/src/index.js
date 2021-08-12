import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import {reducer} from './reducers'

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const rootElement =   document.getElementById('root')

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>,
  rootElement

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

