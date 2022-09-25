import React, { useState, useEffect } from 'react';

const Forge = () => {
  const [token, setToken] = useState(null);

  const getAccessToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/forge/oauth');
      const jsonData = await response.json();

      setToken(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <div>
      <h1>{`Access Token: ${token}`}</h1>
    </div>
  );
}

export default Forge;