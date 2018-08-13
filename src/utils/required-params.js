const {isNullOrUndefined} = require('util')

export const areRequiredParams = (params) => {
    return params
        .filter(param => !isNullOrUndefined(param))
        .length === 0
}
