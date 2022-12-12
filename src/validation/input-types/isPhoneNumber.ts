import { phoneNumberChecker } from "../checkers/regexCheckers";

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
 * @returns {boolean} Return "true" if the checked string contains
 */

function isPhoneNumber(phone: string): boolean {
    if (phoneNumberChecker.test(phone)) return true;
    return false;
}

export default isPhoneNumber;
