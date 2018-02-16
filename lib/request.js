import fetch from 'isomorphic-unfetch';

const BASE_URL = `${process.env.HOST}:${process.env.PORT}`;

export default {
  async get(path, data) {
    let response = await fetch(BASE_URL + path, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },

  async post(path, data) {
    let response = await fetch(BASE_URL + path, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },
};
