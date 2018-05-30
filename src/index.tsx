import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux_store';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/index.scss';
import Main from './main';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Main/>
  </Router>
</Provider>, document.getElementById('app')as HTMLElement);
// registerServiceWorker();
