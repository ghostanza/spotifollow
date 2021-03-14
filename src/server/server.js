require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const routes = require('./routes/main.js')
const port = 8080;

// app.use(express.static(path.join(__dirname, '../../build')));

app.use(routes);

app.get('/ping', function (req, res) {
 res.send({message: 'pong'});
});

app.use((err, req, res, next) => {
  res.send("500 error");
});

app.listen(port);
console.log("server is running")
