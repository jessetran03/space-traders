const token = "11966585-be99-4671-95ec-4e720ffaa008";
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
