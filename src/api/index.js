var express = require('express')
var router = express.Router()
import holidays from "./holidays"
import regions from './regions'

router.get('/ping', function (req, res) {
    return res.send('pong');
});

router.use('/', holidays);
router.use('/', regions);

export default router;
