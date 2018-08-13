///countries get list of countries
var express = require('express')
var router = express.Router();
const Holidays = require('date-holidays')
import {areRequiredParams} from "../utils/required-params";
import {isNullOrUndefined} from 'util';

router.get('/countries', (req, res) => {
    var hd = new Holidays();
    const contries = hd.getCountries();
    res.send(JSON.stringify(contries));
});

router.get('/countries/:country/states', (req, res) => {
    const {country} = req.params;
    if (areRequiredParams([country])) {
        res.status(404)
            .send('not found')
    }
    var hd = new Holidays();
    const states = hd.getStates(country);
    if (isNullOrUndefined(states)) {
        res.status(404)
            .send('no states for this country')
    }
    res.send(JSON.stringify(states));
});

router.get('/countries/:country/states/:state/regions', (req, res) => {
    const {country, state} = req.params;

    // check if all required params are defined
    if (areRequiredParams([country, state])) {
        res.status(404)
            .send('not found')
    }
    var hd = new Holidays();
    const states = hd.getRegions(country, state);
    if (isNullOrUndefined(states)) {
        res.status(404)
            .send('no states for this country')
    }
    res.send(JSON.stringify(states));
});


export default router;
