import fetch from 'isomorphic-unfetch';

const BASE_URL = `${process.env.HOST}:${process.env.PORT}`;

export default {
  async get(path, data, req) {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (req) {
      // Hack to support cookies in isomorphic-fetch
      headers['cookie'] = req.headers.cookie;
    }
    let response = await fetch(BASE_URL + path, {
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers,
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },

  async post(path, data, req = null) {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (req) {
      // Hack to support cookies in isomorphic-fetch
      headers['cookie'] = req.headers.cookie;
    }
    let response = await fetch(BASE_URL + path, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers,
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },
};
