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

/**
 * Get all states for a specific country
 * params : country
 */
router.get('/countries/:country/states', (req, res) => {
    const {country} = req.params;

    var hd = new Holidays();
    const states = hd.getStates(country);
    if (isNullOrUndefined(states)) {
        res.status(404)
            .send('no states for this country')
    }
    res.send(JSON.stringify(states));
});


/**
 * Get all region for a specific country and state
 * params : country, state
 */
router.get('/countries/:country/states/:state/regions', (req, res) => {
    const {country, state} = req.params;

    var hd = new Holidays();
    const states = hd.getRegions(country, state);
    if (isNullOrUndefined(states)) {
        res.status(404)
            .send('no region for this country')
    }
    res.send(JSON.stringify(states));
});

/**
 * Get all region for a specific country and state
 * params : country, state
 */
router.get('/countries/:country/states/:state/regions/:region', (req, res) => {
    const {country, state,region} = req.params;

    var hd = new Holidays();
    const states = hd.getRegions(country, state, region);
    if (isNullOrUndefined(states)) {
        res.status(404)
            .send('no region for this country')
    }
    res.send(JSON.stringify(states));
});

export default router;
