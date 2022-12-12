import { nameChecker } from "../checkers/regexCheckers";

/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is valid name
 *
 * @private
 * @param {string} name The string to be checked if is name format
 * @returns {boolean} Return "true" if the string is name valid format - i.e. Augustus Jr. -  or "false" if not
 */

function isName(name: string): boolean {
    if (nameChecker.test(name)) return true;
    return false;
}

export default isName;
