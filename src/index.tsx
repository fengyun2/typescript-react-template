import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './containers/Hello';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Main from './main';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'World'
});
console.log('total-state: ', store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router><Main/></Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
