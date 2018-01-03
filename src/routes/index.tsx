// import * as React from 'react';

import Home from '../containers/Home/index';
import Recruit from '../containers/Recruit/index';
import Message from '../containers/Message/index';
import Zone from '../containers/Zone/index';

import Hello from '../containers/Hello';

// 路由命名唯一
const routes = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: Home,
    icon: 'home'
  },
  {
    name: '招聘',
    path: '/recruit',
    component: Recruit
  },
  {
    name: '消息',
    path: '/message',
    component: Message
  },
  {
    name: '我的',
    path: '/zone',
    component: Zone,
  },
  {
    name: '测试',
    path: '/dev',
    component: Hello
  }
];

export default routes;