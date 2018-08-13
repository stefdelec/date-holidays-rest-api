'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requiredParams = require('../utils/required-params');

var _util = require('util');

///countries get list of countries
var express = require('express');
var router = express.Router();
var Holidays = require('date-holidays');


router.get('/countries', function (req, res) {
    var hd = new Holidays();
    var contries = hd.getCountries();
    res.send(JSON.stringify(contries));
});

router.get('/countries/:country/states', function (req, res) {
    var country = req.params.country;

    if ((0, _requiredParams.areRequiredParams)([country])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    var states = hd.getStates(country);
    if ((0, _util.isNullOrUndefined)(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

router.get('/countries/:country/states/:state/regions', function (req, res) {
    var _req$params = req.params,
        country = _req$params.country,
        state = _req$params.state;

    // check if all required params are defined

    if ((0, _requiredParams.areRequiredParams)([country, state])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    var states = hd.getRegions(country, state);
    if ((0, _util.isNullOrUndefined)(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

exports.default = router;