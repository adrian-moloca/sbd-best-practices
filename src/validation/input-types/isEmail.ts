import { emailChecker } from "../checkers/regexCheckers";

/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is email
 *
 * @private
 * @param {string} email The string to be checked if is email
 * @returns {boolean} Return "true" if the string is email format - i.e. test@gmail.com -  or "false" if not
 */

function isEmail(email: string): boolean {
    if (emailChecker.test(email)) return true;
    return false;
}

export default isEmail;
