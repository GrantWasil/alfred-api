class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  createNewCharacter(keyword, name, traits, preview) {
    return fetch(`${this._baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        keyword,
        name,
        traits,
        preview,
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