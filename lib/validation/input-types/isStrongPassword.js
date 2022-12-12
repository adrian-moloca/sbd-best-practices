"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexCheckers_1 = require("../checkers/regexCheckers");
/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is strong password
 *
 * @private
 * @param {string} password The string to be checked if is strong password
 * @returns {Boolean} Return "true" if it will contain at least a lowercase letter, at least an uppercase letter, at least a special character, at least a number and the minimum length to be 8, or "false" if not
 */
function isStrongPassword(password) {
    if (regexCheckers_1.passwordChecker.test(password))
        return true;
    return false;
}
exports.default = isStrongPassword;
