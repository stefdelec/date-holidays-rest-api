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