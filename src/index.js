import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import { fetchProducts } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)