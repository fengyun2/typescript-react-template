import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

/* reducers */
import helloState from './hello';
import homeState from './home';

const rootReducer = combineReducers({
  routing,
  helloState,
  homeState
});

export default rootReducer;