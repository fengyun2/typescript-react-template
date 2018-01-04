import { BASE_URL } from '../config';

function parseJSON(response: any) {
  return Promise.all([response, response.json()]);
}

function fetchHtml(response: any) {
  return Promise.all([response, response.text()]);
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function getApi(url: string, headers: object = {}) {
  if (!url.startsWith('https')) { url = BASE_URL + url; }
  console.log(`get_request_url: ${url}`);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  };
  // url = 'https://facebook.github.io/react-native/movies.json';
  return (
    fetch(url, options)
      .then(checkStatus)
      // .then(response => response.json())
      .then(parseJSON)
      .then(data => ({ data }))
      .catch((err) => {
        console.log(`fetch error: ${err.message}`);
        return { err };
      })
  );
}

export function postApi(url: string, body: any) {
  if (!url.startsWith('https')) { url = BASE_URL + url; }
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch((err) => {
      console.log(`fetch error: ${err.message}`);
      return { err };
    });
}

export function requestHtml(url: string, headers: object = {}) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(fetchHtml)
    .then(data => ({ data }))
    .catch((err) => {
      console.log(`fetch error: ${err.message}`);
      return { err };
    });
}