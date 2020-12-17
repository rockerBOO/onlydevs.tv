const clientKey = `gp762nuuoqcoxypju8c569th9wz7q5`;

export const checkIfOnline = (token) => async (names) => {
  return fetch(
    `https://api.twitch.tv/helix/streams?${names.map(
      (name) => `user_id=${name}&`
    )}`,
    { headers: { "Client-ID": clientKey, Authorization: `Bearer ${token}` } }
  )
		.then((resp) => {
			if (!resp.ok) {
				throw new Error("Invalid result.")
			}

			return resp.json()
		})
    .then((json) => {
      console.log("online!", json);
			
			return json.data
    })
    .catch((err) => console.error(err));
};


