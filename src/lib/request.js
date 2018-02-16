export default {
  async get(path, data) {
    let response = await fetch(path, {
      method: 'GET',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },

  async post(path, data) {
    let response = await fetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    response = await response.json();
    if (response.status == 'success') {
      return response.data;
    } else {
      throw response.message;
    }
  },
};
