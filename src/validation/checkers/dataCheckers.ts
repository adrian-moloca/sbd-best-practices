/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A list of utils functions ready to test multiple kind of data types and formats
 */

export function isObject(data: any): boolean {
    if (typeof data === "object" && !Array.isArray(data) && data !== null && data.constructor === Object) return true;
    return false;
}

export function isArray(data: any): boolean {
    if (Array.isArray(data) && data.constructor === Array) return true;
    return false;
}
