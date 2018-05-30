/* import {BASE_URL} from '../config';

function parseJSON(response : any) {
  return Promise.all([
    response, response.json()
  ]);
}

function fetchHtml(response : any) {
  return Promise.all([
    response, response.text()
  ]);
}

function checkStatus(response : any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error : any = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function getApi(url : string, headers : object = {}) {
  if (!url.startsWith('https')) {
    url = BASE_URL + url;
  }
  console.log(`get_request_url: ${url}`);
  const options = {
    method: 'GET',
    headers: {}
  };
  return (fetch(url, options).then(checkStatus).then(parseJSON).then(data => ({data})).catch((err) => {
    console.log(`fetch error: ${err.message}`);
    return {err};
  }));
}

export function postApi(url : string, body : any) {
  if (!url.startsWith('https')) {
    url = BASE_URL + url;
  }
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({data}))
    .catch((err) => {
      console.log(`fetch error: ${err.message}`);
      return {err};
    });
}

export function requestHtml(url : string, headers : object = {}) {
  const options = {
    method: 'GET',
    headers: {}
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(fetchHtml)
    .then(data => ({data}))
    .catch((err) => {
      console.log(`fetch error: ${err.message}`);
      return {err};
    });
}
 */

import { BASE_URL } from '../config';
import axios from 'axios';
import querystring from 'querystring';

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL, // api的base_url
  timeout: 20000, // 请求超时时间
  transformRequest: [function (data: any) {
      // Do whatever you want to transform the data
      return querystring.stringify(data);
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// request拦截器
service
  .interceptors
  .request
  .use(config => {
    // const token = store.getters.token;
    if (!config.data) {
      config.data = {};
    }
    config.data.token = '';
    return config;
  },   error => {
    Promise.reject(error);
  });

// respone拦截器
service
  .interceptors
  .response
  .use(response => {
    // store.dispatch('HideListLoading');
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    /*     const res = response.data;
    const errMsgs = {
      1000: '登录已失效，请重新登录',
      1002: '您的账户在别处登录',
      // 1003: '登录失败',
      1005: '您的帐号被禁用，请联系管理员',
      1111: ''
    };
    if (res.code !== 200) {
      // 1000: token错误; 1002: token冲突被重置为无效; 1003: 登录失败; 1004: 验证码错误; 1005: 用户被禁用
      if (res.code === 1000 || res.code === 1002 || res.code === 1003 || res.code === 1005 || res.code === 1111) {
          //       store
          // .dispatch('FedLogOut')
          // .then(() => {
          //   router.push({name: 'login'});
          // });
      }
      if (res.code !== 1111) {
        console.log(errMsgs[res.code] || res.message);

        // Message({   message: errMsgs[res.code] || res.message,   type: 'error' });
      }

      if (res.code === 500) {
        return Promise.reject(res);
      }
      // return Promise.reject(res);
      return Promise.resolve(res);
    } else {
      return response.data;
    } */

    return response.data;
  },   error => {
    // store.dispatch('HideListLoading');
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误(400)';
          break;
        case 401:
          error.message = '未授权，请重新登录(401)';
          break;
        case 403:
          error.message = '拒绝访问(403)';
          break;
        case 404:
          error.message = '请求出错(404)';
          break;
        case 408:
          error.message = '请求超时(408)';
          break;
        case 500:
          error.message = '服务器错误(500)';
          break;
        case 501:
          error.message = '服务未实现(501)';
          break;
        case 502:
          error.message = '网络错误(502)';
          break;
        case 503:
          error.message = '服务不可用(503)';
          break;
        case 504:
          error.message = '网络超时(504)';
          break;
        case 505:
          error.message = 'HTTP版本不受支持(505)';
          break;
        default:
          error.message = `连接出错(${error.response.status})!`;
      }
    }
    // Message({message: error.message, type: 'error'});

    return Promise.reject(error);
  });

export default service;
