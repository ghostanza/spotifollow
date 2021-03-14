var url = require('url'),
    axios = require('axios');
module.exports.test = (code) => {
  var token = '';
  return code;
  // await axios.post(
  //   'https://accounts.spotify.com/api/token',
  //   { code, grant_type: 'authorization_code', redirect_uri: process.env.REACT_APP_REDIRECT_URI},
  //   {
  //     headers: {
  //       'Authorization': `Basic ${new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64')}`
  //     }
  //   }
  // ).then(response => {console.log("response"); return "hello"});
}
module.exports.tokenRequest = (code, type, res, req) => {
  var form;
  console.log("testing");
  if(type === 'initial'){
    console.log("INITIAL TOKEN REQUEST");
    form = { code, grant_type: 'authorization_code', redirect_uri: process.env.REACT_APP_REDIRECT_URI}
  }
  else if(type === 'refresh'){
    form = { refresh_token: code, grant_type: 'refresh_token' }
  }

  var options = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: form,
    headers: {
      'Authorization': `Basic ${new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64')}`
    },
    json: true
  };
console.log(form);
res.send(form);
  // axios.post(
  //   'https://accounts.spotify.com/api/token',
  //   form,
  //   {
  //     headers:
  //       {
  //         'Authorization': `Basic ${new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64')}`
  //       }
  //   })
  //   .then( response => {
  //   console.log(response);
  //   res.send(response);
  //   // var token = body.access_token,
  //   //     refresh_token = body.refresh_token,
  //   //     maxAge = body.expires_in,
  //   //     expiration = new Date(Number(new Date()) + (maxAge * 1000));
  //   // res.cookie('token', token, { 'expires': expiration, httpOnly: false });
  //   // if(refresh_token){ res.cookie('refresh', refresh_token, { httpOnly: false }); }
  //   // if(type === 'initial'){
  //   //     res.redirect('/');
  //   // }
  //   // else{
  //   //   res.send({token, type: 'refresh'});
  //   // }
  // }).catch(error => res.send(error));
}
