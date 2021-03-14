const url = require('url');
const axios = require('axios');
const qs = require('qs');

module.exports.tokenRequest = async (code, type, res, req) => {
  /* create the payload -- axios needs to use the qs package */
  let form = {};
  if(type === 'initial'){
    form = qs.stringify({ code, grant_type: 'authorization_code', redirect_uri: process.env.REACT_APP_REDIRECT_URI});
  }
  else if(type === 'refresh'){
    form = qs.stringify({ refresh_token: code, grant_type: 'refresh_token' });
  }
  /* make the axios call to get the auth token */
  await axios.post(
    'https://accounts.spotify.com/api/token',form,
    {
      headers: {
        'Authorization': `Basic ${new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64')}`,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
      },
    }
  )
  .then(response => {
    if(response.status && response.status == 200){
      /* If we get a token, set a token cookie
      * so that the client-side code can access it for calls */
      let data = response.data;
      let token = data && data.access_token ? data.access_token : '';
      let refresh_token = data.refresh_token;
      let maxAge = data.expires_in;
      let expiration = new Date(Number(new Date()) + (maxAge * 1000));
      res.cookie('token', token, { 'expires': expiration, httpOnly: false });
    }else{
      /* otherwise log that we didn't get it */
      console.log("Unsuccessful attempt to get token");
    }
    /* load the homepage */
    res.redirect('/');
  })
  .catch(error => res.send(error));
}
