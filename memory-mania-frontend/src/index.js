import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';

import { Provider } from 'react-redux';
import gameReducer from './reducers/gameReducer.js'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(gameReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={App} />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
