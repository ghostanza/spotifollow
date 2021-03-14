const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const routes = require('./routes/main.js')
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../build')));

app.use(routes);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use((req, res, next) => {
  res.status(404);
  res.redirect('/');
});
app.use((err, req, res, next) => {
  res.send("500 error");
});

app.listen(port);
console.log("server is running")
