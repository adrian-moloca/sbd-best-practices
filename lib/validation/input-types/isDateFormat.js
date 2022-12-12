"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexCheckers_1 = require("../checkers/regexCheckers");
/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is date format
 *
 * @private
 * @param {string} date The string to be checked if is date format
 * @returns {Boolean} Return "true" if the string is date format - i.e. 01.12.2022 - or "false" if not
 */
function isDateFormat(date) {
    if (regexCheckers_1.dateFormatChecker.test(date))
        return true;
    return false;
}
exports.default = isDateFormat;
