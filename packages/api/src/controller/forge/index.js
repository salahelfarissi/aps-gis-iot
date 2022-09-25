const axios = require('axios').default;

const { getPublicToken } = require('../../middleware/oauth');

const oauth = async (req, res, next) => {
  try {
    const token = await getPublicToken();
    res.json({
        access_token: token.access_token,
        expires_in: token.expires_in
    });
  } catch (err) {
      next(err);
  }
}

const oss = async (req, res) => {
  try {
    const response = await axios.post(
      'https://developer.api.autodesk.com/oss/v2/buckets',
      JSON.stringify({
        'bucketKey': bucketKey,
        'policyKey': policyKey
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.send('Failed to create a new bucket');
  }
}

const modelderivative = async (req, res) => {}

module.exports = {
  oauth,
  oss,
  modelderivative,
}