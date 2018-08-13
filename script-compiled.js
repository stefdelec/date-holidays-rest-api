'use strict';

var _requiredParams = require('./utils/required-params');

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    https = require('https'),
    http = require('http'),
    fs = require('fs');
var Holidays = require('date-holidays');

var _require = require('child_process'),
    exec = _require.exec;

var certOptions = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.crt')
};

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});

///countries get list of countries

app.get('/countries', function (req, res) {
    var hd = new Holidays();
    var contries = hd.getCountries();
    res.send(JSON.stringify(contries));
});

app.get('/countries/:country/states', function (req, res) {
    var country = req.params.country;

    if ((0, _requiredParams.areRequiredParams)([country])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    var states = hd.getStates(country);
    if (isNullOrUndefined(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

app.get('/countries/:country/states/:state/regions.js', function (req, res) {
    var _req$params = req.params,
        country = _req$params.country,
        state = _req$params.state;

    // check if all required params are defined

    if ((0, _requiredParams.areRequiredParams)([country, state])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    var states = hd.getRegions(country);
    if (isNullOrUndefined(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

http.createServer(app).listen(8081);
//https.createServer(certOptions, app).listen(443);
// app.listen(process.env.PORT || 8082);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('util'),
    isNullOrUndefined = _require.isNullOrUndefined;

var areRequiredParams = exports.areRequiredParams = function areRequiredParams(params) {
    return params.filter(function (param) {
        return !isNullOrUndefined(param);
    }).length === 0;
};
