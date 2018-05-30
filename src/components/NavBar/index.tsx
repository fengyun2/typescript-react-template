import * as React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import styles from './index.module.scss';
import logo from '../../assets/images/logo.png';

const Search = Input.Search;
class NavBar extends React.PureComponent < any,
any > {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles['navbar-inner']}>
          <div className={classNames(styles.container, 'clearfix')}>
            <a href="/" className={styles.brand}>
              <img src={logo}/>
            </a>
            <Search
              placeholder=""
              onSearch={value => console.log(value)}
              className={styles['search-query']}/>

            <ul className={classNames(styles.nav, styles['pull-right'])}>
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a href="/getstart">新手入门</a>
              </li>
              <li>
                <a href="/api">API</a>
              </li>
              <li>
                <a href="/about">关于</a>
              </li>
              <li>
                <a href="/signup">注册</a>
              </li>
              <li>
                <a href="/signin">登录</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
