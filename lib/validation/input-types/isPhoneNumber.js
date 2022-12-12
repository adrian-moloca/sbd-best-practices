"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexCheckers_1 = require("../checkers/regexCheckers");
/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is phone number format
 *
 * @private
 * @param {string} phone The string to be checked if is strong password
 * @returns {Boolean} Return "true" if the checked string contains
 */
function isPhoneNumber(phone) {
    if (regexCheckers_1.phoneNumberChecker.test(phone))
        return true;
    return false;
}
exports.default = isPhoneNumber;
