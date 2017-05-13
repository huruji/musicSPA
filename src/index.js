import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './css/app.scss';
import {Provider} from 'react-redux';
import rootReducer from './redux/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
