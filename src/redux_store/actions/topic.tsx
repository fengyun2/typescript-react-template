// topic.js
import * as actionTypes from '../constants';
// api(service)
import { homeApi } from '../apis/index';
interface TopicParams {
  id: string;
}
// 异步
export function queryTopic(params: TopicParams) {
  return async(dispatch: any) => {
    dispatch({type: actionTypes.DETAIL_LOADING, payload: true});
    const topic: any = await homeApi.getTopic(params);

    dispatch({type: actionTypes.DETAIL_LOADING, payload: false});
    dispatch({
      type: actionTypes.DETAIL_QUERY_SUCCESS,
      payload: {
        data: topic
      }
    });
  };
}
