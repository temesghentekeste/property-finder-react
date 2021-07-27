import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
