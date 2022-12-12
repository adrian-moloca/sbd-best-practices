import { dateFormatChecker } from "../checkers/regexCheckers";

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
 * @returns {boolean} Return "true" if the string is date format - i.e. 01.12.2022 - or "false" if not
 */

function isDateFormat(date: string): boolean {
    if (dateFormatChecker.test(date)) return true;
    return false;
}

export default isDateFormat;
