'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requiredParams = require('../utils/required-params');

var _util = require('util');

const Holidays = require('date-holidays');
var express = require('express');
var router = express.Router();

router.get('/countries/:country/holidays/:year', (req, res) => {
    const { country, year } = req.params;

    // check if all required params are defined
    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country);

    const holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});

router.get('/countries/:country/states/:state/holidays/:year', (req, res) => {
    const { country, year, state } = req.params;

    // check if all required params are defined
    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country, state);

    const holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});

router.get('/countries/:country/states/:state/regions/:region/holidays/:year', (req, res) => {
    const { country, year, state, region } = req.params;

    // check if all required params are defined
    if ((0, _requiredParams.areRequiredParams)([country, year])) {
        res.status(404).send('not found');
    }
    var hd = new Holidays(country, state, region);

    const holidays = hd.getHolidays(year);
    res.send(JSON.stringify(holidays));
});
exports.default = router;
//# sourceMappingURL=holidays.js.map