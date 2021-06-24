const token = "c4b0d344-abab-435d-8f33-f780b2b5f438";
const url = "https://api.spacetraders.io";

const ApiService = {

  async getData() {
		const results = {}
    const [status, user] = await Promise.all([
			fetch(`${url}/game/status`)
				.then((res) => res.json()), 
			fetch(`${url}/my/account`, {
      	method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    ])
		results.status = status.status
		results.user = user.user
		return results
	}
}

export default ApiService