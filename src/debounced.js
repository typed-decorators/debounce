"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
function debounced(wait) {
    return function (_target, _name, descriptor) {
        var enumerable = descriptor.enumerable, configurable = descriptor.configurable, value = descriptor.value;
        return {
            enumerable: enumerable,
            configurable: configurable,
            value: lodash_1.debounce(value, wait)
        };
    };
}
exports.debounced = debounced;
