'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requiredParams = require('../utils/required-params');

var _util = require('util');

///countries get list of countries
var express = require('express');
var router = express.Router();
const Holidays = require('date-holidays');


router.get('/countries', (req, res) => {
    var hd = new Holidays();
    const contries = hd.getCountries();
    res.send(JSON.stringify(contries));
});

router.get('/countries/:country/states', (req, res) => {
    const { country } = req.params;
    if ((0, _requiredParams.areRequiredParams)([country])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    const states = hd.getStates(country);
    if ((0, _util.isNullOrUndefined)(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

router.get('/countries/:country/states/:state/regions', (req, res) => {
    const { country, state } = req.params;

    // check if all required params are defined
    if ((0, _requiredParams.areRequiredParams)([country, state])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays();
    const states = hd.getRegions(country, state);
    if ((0, _util.isNullOrUndefined)(states)) {
        res.status(404).send('no states for this country');
    }
    res.send(JSON.stringify(states));
});

exports.default = router;
//# sourceMappingURL=regions.js.map