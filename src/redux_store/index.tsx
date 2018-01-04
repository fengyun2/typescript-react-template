import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  routerMiddleware
} from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
const history = createHistory();
const middleware = routerMiddleware(history);
// const middlewares = [thunk, middleware];
const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk, middleware))
);

export default store;