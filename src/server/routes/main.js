var express = require('express'),
    router = express.Router(),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    request = require('request');

// API routes
router.get('/s/:endpoint', (req,res,next) => {
  var endpoint = req.params.endpoint || '';
    switch(endpoint){
      case 'callback':
        var code = req.query.code;
        res.send(`TESTING CALLBACK, CODE: ${code}`);
        break;
      case 'code':
        res.send("FETCHING THE CODE...")
        break;
      case 'token':
        var refresh = req.query.refresh;
        res.send(`TESTING TOKEN, REFRESH: ${refresh}`);
        break;
      default:
        //logger.log_404(req);
        res.status(404);
        res.send("CANNOT FIND ENDPOINT");
        break;
    }
})

// main app
router.get(['/'], (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
});

module.exports = router;
