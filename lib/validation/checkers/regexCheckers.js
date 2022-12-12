"use strict";
/**
 * Author: Adrian Moloca
 * Version: 0.0.1
 *
 * Made with ❤️ in Rodna
 *
 * A list of regex ready to test multiple kind of input types and formats
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlChecker = exports.nameChecker = exports.dateFormatChecker = exports.phoneNumberChecker = exports.passwordChecker = exports.emailChecker = void 0;
exports.emailChecker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
exports.passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
exports.phoneNumberChecker = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
exports.dateFormatChecker = /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/;
exports.nameChecker = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
exports.urlChecker = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
