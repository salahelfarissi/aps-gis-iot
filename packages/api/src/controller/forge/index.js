const Axios = require('axios').default;

const oauth = () => {
  Axios({
    method: 'post',
    url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
    data: new URLSearchParams({
      client_id: process.env.FORGE_CLIENT_ID,
      client_secret: process.env.FORGE_CLIENT_SECRET,
      grant_type: 'client_credentials',
      scope: 'data:read data:write',
    }),
  })
    .then((response) => {
      console.log(response.data.access_token);
    })
    .catch((error) => {
      console.log(error);
    })
}

module.exports = oauth;