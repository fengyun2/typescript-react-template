// home.js
import * as actionTypes from '../constants';
// api(service)
import { homeApi } from '../apis/index';
interface TopicsParams {
  page?: number;
  tab?: string;
}
// 异步
export function queryTopics(params: TopicsParams) {
  const { page = 1, tab } = params;
  console.log(`fetch queryTopics: ${tab}`);
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.HOME_TAB,
      payload: tab,
    });
    dispatch({
      type: actionTypes.HOME_LOADING,
      payload: true,
    });
    const { data, err }: any = await homeApi.queryTopics(params);
    dispatch({
      type: actionTypes.HOME_LOADING,
      payload: false,
    });
    if (err) {
      return console.log(err);
    }

    dispatch({
      type: actionTypes.HOME_PAGE,
      payload: page,
    });
    if (page === 1) {
      dispatch({
        type: actionTypes.HOME_QUERY_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: actionTypes.HOME_MORE_SUCCESS,
        payload: data,
      });
    }
  };
}
