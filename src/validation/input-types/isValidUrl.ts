import { urlChecker } from "../checkers/regexCheckers";

/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A special check for string if is valid url
 *
 * @private
 * @param {string} url The string to be checked if is email
 * @returns {boolean} Return "true" if the string is url format - i.e. https://www.google.com -  or "false" if not
 */

function isValidUrl(url: string): boolean {
    if (urlChecker.test(url)) return true;
    return false;
}

export default isValidUrl;
