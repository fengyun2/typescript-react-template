import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Pagination } from 'antd';
import { queryTopics } from '../../redux_store/actions/home';
import styles from './index.module.scss';

import NavBar from '../../components/NavBar';
import { tabs } from '../../config';

class Home extends React.PureComponent < any,
any > {
  _flatlist: any;
  componentDidMount() {
    const {tab} = this.props.homeState;
    const params = {
      tab
    };
    this
      .props
      .query(params);
  }
  _onSwitch = (tab: string) => {
    this
      .props
      .query({tab});
  }
  handlePageChange = (tab: string, page: number) => {
    console.log('====================================');
    console.log('page: ', page);
    console.log('====================================');
    this
      .props
      .query({tab, page});
  }
  toTopic = (topic: any) => {
    this
      .props
      .history
      .push('/topic/' + topic.id);
  }
  render() {
    // const {tab} = this.props.homeState;
    const {
      data = [],
      page = 1,
      tab,
      loading
    } = this.props.homeState;
    console.log(data, page, );
    let TopicList = null;
    if (Array.isArray(data) && data.length > 0) {
      TopicList = data.map(topic => (
        <div className={styles.cell} key={topic.id}>
          <a className={classNames(styles.user_avatar, 'pull-left')}>
            <img
              src={topic.author.avatar_url}
              alt={topic.author.loginname}
              title={topic.author.loginname}/>
          </a>
          <span className={classNames(styles.reply_count, 'pull-left')}>
            <span className={styles.count_of_replies} title="回复数">
              {topic.reply_count}
            </span>
            <span className={styles.count_seperator}>/</span>
            <span className={styles.count_of_visits} title="点击数">
              {topic.visit_count}
            </span>
          </span>
          <a className={classNames(styles.last_time, 'pull-right')}>
            <img className={styles.user_small_avatar} src="" alt=""/>
            <span className={styles.last_active_time}>2 小时前</span>
          </a>
          <div className={styles.topic_title_wrapper}>
            {topic.top
              ? <span className="put_top">置顶</span>
              : null}

            <a
              className={styles.topic_title}
              title={topic.title}
              onClick={item => this.toTopic(item)}>{topic.title}</a>
          </div>
        </div>
      ));
    }
    return (
      <div className={styles.container}>
        <NavBar/> {/* tabs */}
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.panel}>
              <header className={styles.header}>
                <div className={styles.tabs}>
                  {tabs.map((item, index) => {
                    return (
                      <a
                        key={index}
                        className={`${styles['topic-tab']} ${item.key === tab
                        ? styles['current-tab']
                        : ''}`}
                        onClick={() => this._onSwitch(item.key)}>
                        {item.value}
                      </a>
                    );
                  })}
                </div>
              </header>
              <div className={classNames(styles.inner, 'no-padding')}>
                <div className={styles['topic-list']}>
                  {TopicList}
                </div>
                <div className={styles.pagination_wrap}>
                  <Pagination
                    current={page}
                    pageSize={20}
                    onChange={cur_page => this.handlePageChange(tab, cur_page)}
                    total={10000}/>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const mapStateToProps = (state: {}) => {
  return state;
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    query: (params: any) => dispatch(queryTopics(params))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
