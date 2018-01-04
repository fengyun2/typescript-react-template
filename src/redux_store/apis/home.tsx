import { getApi } from '../../utils/request';
import { moment } from '../../utils/tool';

interface TopicsParams {
  page?: number;
  tab?: string;
  limit?: number;
  mdrender?: boolean;
}
export function queryTopics(params: TopicsParams) {
  const { page = 1, tab = 'all', limit = 20, mdrender = true } = params;
  return getApi(
    `/topics?page=${page}&limit=${limit}&tab=${tab}&mdrender=${mdrender}`
  );
}
export function parseTopics(data: any) {
  const tabs = {
    top: '置顶',
    ask: '问答',
    good: '精华',
    share: '分享',
    job: '招聘',
    dev: '测试',
    default: '暂无',
  };
  const topics = data.map((topic: any) => {
    const create_at = moment(topic.create_at)
      .startOf('minute')
      .fromNow();
    const last_reply_at = moment(topic.last_reply_at)
      .startOf('minute')
      .fromNow();

    const avatar_url = topic.author.avatar_url;

    if (avatar_url && !avatar_url.startsWith('https')) {
      topic.author.avatar_url = `https:${avatar_url}`;
    }
    let tab = topic.tab || 'default';
    if (topic.top) {
      tab = 'top';
    }
    if (topic.good) {
      tab = 'good';
    }
    const sort = tabs[tab];
    const title = topic.title.replace(/[\r\n]/g, '');
    return { ...topic, create_at, last_reply_at, tab, title, sort };
  });
  return topics;
}
