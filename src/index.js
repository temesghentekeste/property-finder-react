import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Routes from './components/Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store';

axios.defaults.baseURL = 'https://api-temesghen-property.herokuapp.com/api/v1';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
