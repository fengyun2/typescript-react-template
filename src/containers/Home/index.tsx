import * as React from 'react';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import { queryTopics } from '../../redux_store/actions/home';
import styles from './index.module.scss';
class Home extends React.PureComponent<any, any> {
  _flatlist: any;
  componentDidMount() {
    const { tab } = this.props;
    const params = { tab };
    this.props.query(params);
  }
  _onSwitch = (tab: string) => {
    // this._flatlist.scrollToOffset({ animated: true, offset: 0 });
    this.props.query({ tab });
  }
  render() {
    const { tab } = this.props.homeState;
    // const { data = [], page = 1, tab, loading } = this.props.homeState;
    // const tab = 'ask';
    // console.log(data, page, );
    console.log(this.props);
    const tabs = [
      { key: 'all', value: '全部' },
      { key: 'good', value: '精华' },
      { key: 'share', value: '分享' },
      { key: 'ask', value: '问答' },
      { key: 'dev', value: '测试' }
    ];
    return (
      <div className={styles.container}>
        {/* tabs */}
        <div className={styles.tabsView}>
          {tabs.map((item, index) => {
            console.log(item.key, tab);
            return (
              <div
                key={index}
                className={`${styles.tabView} ${
                  item.key === tab ? styles.tabActive : ''
                }`}
                onClick={() => this._onSwitch(item.key)}
              >
                <span
                  className={`${styles.tabText} ${
                    item.key === tab ? styles.textActive : ''
                  }`}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
        {/* <h1 className={styles.title}>这是Home页面</h1> */}
        <div
          className={styles.list}
          ref={flatlist => (this._flatlist = flatlist)}
        >
          <h1 className={styles.title}>这是Home页面</h1>
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
