import {areRequiredParams} from "../utils/required-params";
import {isNullOrUndefined} from 'util';
const Holidays = require('date-holidays')
var express = require('express')
var router = express.Router()


/**
 * get holidays for a specific country and year
* params : country, year
 */
router.get('/countries/:country/holidays/:year', (req, res) => {
    const {country, year} = req.params;

    // check if all required params are defined
    if (areRequiredParams([country, year])) {
        res.status(404)
            .send('not found')
    }
    const hd = new Holidays(country);

    const holidays = hd.getHolidays(year)
    res.send(JSON.stringify(holidays));
});

/**
 * get holidays for a specific country, state and year
 * params : country, state, year
 */
router.get('/countries/:country/states/:state/holidays/:year', (req, res) => {
    const {country, year, state} = req.params;

    const hd = new Holidays(country, state);
    const holidays = hd.getHolidays(year);

    res.send(JSON.stringify(holidays));
});

/**
 * get holidays for a specific country, state, region and year
 * params : country, state, region, year
 */
router.get('/countries/:country/states/:state/regions/:region/holidays/:year', (req, res) => {
    const {country, year, state, region} = req.params;

    const hd = new Holidays(country, state, region);
    const holidays = hd.getHolidays(year)

    res.send(JSON.stringify(holidays));
});
export default router;
