'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requiredParams = require('../utils/required-params');

var _util = require('util');

var Holidays = require('date-holidays');
var express = require('express');
var router = express.Router();

router.get('/countries/:country/holidays/:year', function (req, res) {
    var _req$params = req.params,
        country = _req$params.country,
        year = _req$params.year;

    // check if all required params are defined

    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country);

    var holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});

router.get('/countries/:country/states/:state/holidays/:year', function (req, res) {
    var _req$params2 = req.params,
        country = _req$params2.country,
        year = _req$params2.year,
        state = _req$params2.state;

    // check if all required params are defined

    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country, state);

    var holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});

router.get('/countries/:country/states/:state/regions/:region/holidays/:year', function (req, res) {
    var _req$params3 = req.params,
        country = _req$params3.country,
        year = _req$params3.year,
        state = _req$params3.state,
        region = _req$params3.region;

    // check if all required params are defined

    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country, state, region);

    var holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});
exports.default = router;