'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _holidays = require('./holidays');

var _holidays2 = _interopRequireDefault(_holidays);

var _regions = require('./regions');

var _regions2 = _interopRequireDefault(_regions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();


router.get('/ping', function (req, res) {
    return res.send('pong');
});

router.use('/', _holidays2.default);
router.use('/', _regions2.default);

exports.default = router;
//# sourceMappingURL=index.js.map