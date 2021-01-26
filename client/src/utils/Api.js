class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  createNewCharacter(data) {
    return fetch(`${this._baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data
      })
    })
      .then((res) => {
        try {
          if (res.status === 201) {
            return res.json();
          }
        } catch (e) {
          return (e)
        }
      })
      .then((res) => {
        return res;
      })
  };

}

const api = new Api({
  baseUrl: '/api'
})

export default api;