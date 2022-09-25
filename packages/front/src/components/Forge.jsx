import React, { useState, useEffect } from 'react';
const Axios = require('axios').default;

const Forge = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    Axios({
      method: 'post',
      url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
      data: new URLSearchParams({
        client_id: process.env.REACT_APP_FORGE_CLIENT_ID,
        client_secret: process.env.REACT_APP_FORGE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'data:read data:write',
      }),
    })
      .then((response) => {
        setToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      })
    },
  []);

  return (
    <div>
      <h1>{`Access Token: ${token}`}</h1>
    </div>
  );
}

export default Forge;