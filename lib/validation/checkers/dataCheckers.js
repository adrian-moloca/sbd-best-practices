"use strict";
/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A list of utils functions ready to test multiple kind of data types and formats
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isObject = void 0;
function isObject(data) {
    if (typeof data === "object" && !Array.isArray(data) && data !== null && data.constructor === Object)
        return true;
    return false;
}
exports.isObject = isObject;
function isArray(data) {
    if (Array.isArray(data) && data.constructor === Array)
        return true;
    return false;
}
exports.isArray = isArray;
