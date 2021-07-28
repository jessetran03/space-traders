const token = "7d020916-c053-4d8a-93f4-318ebd8749e1";
const url = "https://api.spacetraders.io";

const ApiService = {
  async getUser() {
    return fetch(`${url}/my/account`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error({ error }))
  },

  async getStatus() {
    return fetch(`${url}/game/status`)
      .then((res) => res.json())
      .catch((error) => console.error({ error }))
  },

  async getLoans() {
    return fetch(`${url}/types/loans`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error({ error }))
  },
};

export default ApiService;
