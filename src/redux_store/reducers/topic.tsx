// home.js

import * as actionTypes from '../constants';

const initialState = {
  topic: {},
  loading: false
};

const topicState = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.DETAIL_QUERY_SUCCESS:
      {
        let {data} = action.payload;
        return {
          ...state,
          topic: data.data
        };
      }

    case actionTypes.DETAIL_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default topicState;
