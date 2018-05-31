import {routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

/* reducers */
import helloState from './hello';
import homeState from './home';
import topicState from './topic';

const rootReducer = combineReducers({routing, helloState, homeState, topicState});

export default rootReducer;
