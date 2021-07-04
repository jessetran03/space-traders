const token = "c4b0d344-abab-435d-8f33-f780b2b5f438";
const url = "https://api.spacetraders.io";

const ApiService = {
  async getUser() {
    return fetch(`${url}/my/account`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },

  async getStatus() {
    return fetch(`${url}/game/status`)
      .then((res) => res.json());
  },
};

export default ApiService;
