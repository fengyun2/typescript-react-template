// home.js

import * as actionTypes from '../constants';

// api(service)
import { homeApi } from '../apis/index';

const initialState = {
  page: 1,
  tab: 'all',
  data: [],
  user: {},
  accesstoken: {},
  loading: false,
  isLogin: false,
};

const homeState = (state = initialState, action: any) => {
  console.log(`homeReducers: ${action.type}`);
  switch (action.type) {
    case actionTypes.HOME_QUERY_SUCCESS: {
      let [, data] = action.payload;
      const topics = homeApi.parseTopics(data.data);
      return { ...state, data: topics };
    }

    case actionTypes.HOME_MORE_SUCCESS: {
      let [, data] = action.payload;
      const topics = homeApi.parseTopics(data.data);
      return { ...state, data: [...state.data, ...topics] };
    }

    case actionTypes.HOME_TAB:
      return { ...state, tab: action.payload };
    case actionTypes.HOME_PAGE:
      return { ...state, page: action.payload };
    case actionTypes.HOME_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default homeState;
