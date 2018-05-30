import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import store from './redux_store';

// import registerServiceWorker from './registerServiceWorker'; import
import './styles/index.scss';
import Main from './main';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <LocaleProvider locale={zh_CN}>
      <Main/>
    </LocaleProvider>
  </Router>
</Provider>, document.getElementById('app')as HTMLElement);
// registerServiceWorker();
