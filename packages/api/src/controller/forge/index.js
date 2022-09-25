const axios = require('axios').default;

const oauth = async (req, res) => {
  try {
    const response = await axios.post(
      'https://developer.api.autodesk.com/authentication/v1/authenticate', 
      new URLSearchParams({
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'data:read data:write',
      })
    )
    res.json(response.data.access_token);
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = oauth;