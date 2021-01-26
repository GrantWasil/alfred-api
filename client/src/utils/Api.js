class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  createNewCharacter(data) {
    return fetch(`${this._baseUrl}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => {
        try {
          if (res.status === 201) {
            return res.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((res) => {
        return res;
      });
  }

  loginUser(keyword) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  }
}

const api = new Api({
  baseUrl: '/api',
});

export default api;
