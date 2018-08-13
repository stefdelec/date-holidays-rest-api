'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const { isNullOrUndefined } = require('util');

const areRequiredParams = exports.areRequiredParams = params => {
    return params.filter(param => !isNullOrUndefined(param)).length === 0;
};
//# sourceMappingURL=required-params.js.map