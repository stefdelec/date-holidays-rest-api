'use strict';

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express(),
      https = require('https'),
      http = require('http'),
      fs = require('fs');
const Holidays = require('date-holidays');
const { exec } = require('child_process');

const certOptions = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.crt')
};

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', _api2.default);

http.createServer(app).listen(8081);
console.log("server ready");
//https.createServer(certOptions, app).listen(443);
// app.listen(process.env.PORT || 8082);
//# sourceMappingURL=index.js.map