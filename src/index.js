import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import {Provider} from 'react-redux';
import App from 'containers/App';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from 'reducer/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument())));

const app = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
