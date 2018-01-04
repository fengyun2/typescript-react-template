import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

/* reducers */
import helloState from './hello';

const rootReducer = combineReducers({
  routing,
  helloState
});

export default rootReducer;