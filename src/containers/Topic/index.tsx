import * as React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './index.module.scss';

class Topic extends React.PureComponent {
  state = {
    isMe: true
  };
  toCollect = () => {
    console.log('====================================');
    console.log('收藏');
    console.log('====================================');
  }
  delCollect = () => {
    console.log('====================================');
    console.log('取消收藏');
    console.log('====================================');
  }
  toEdit = () => {
    console.log('====================================');
    console.log('编辑');
    console.log('====================================');
  }
  toDel = () => {
    console.log('====================================');
    console.log('删除');
    console.log('====================================');
  }
  render() {
    const topic: any = {};
    return (
      <section className={styles.container}>
        <div>
          <header className={styles.header}>
            <span className={styles.title}>{topic.title}</span>
            <div className={classNames(styles.changes, 'clearfix')}>
              <span>发布于 {topic.create_at}</span>
              <span>作者 {topic.author && topic.author.loginname}</span>
              <span>{topic.visit_count}
                次浏览</span>
              <span>最后一次编辑是 {topic.last_reply_at}</span>
              <span>来自 {topic.tabName}</span>
              {topic.is_collect
                ? <Button size="small" className="pull-right" onClick={this.delCollect}>取消收藏</Button>
                : <Button size="small" className="pull-right" onClick={this.toCollect}>收藏</Button>}

            </div>
            {this.state.isMe && (
              <div className={styles.manage_topic}>
                <i
                  className={classNames(styles['edit-btn'], 'el-icon-edit-outline')}
                  onClick={this.toEdit}/>
                <i
                  className={classNames(styles['del-btn'], 'el-icon-delete')}
                  onClick={this.toDel}/>
              </div >
            )}
          </header >
          <div className={styles.topic}>
            <div className={styles.topic_content}>
              {topic.content}
            </div>
          </div>
        </div>

      </section>
    );

  }
}

export default Topic;
