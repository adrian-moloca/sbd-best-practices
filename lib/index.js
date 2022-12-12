"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = exports.isStrongPassword = exports.isPhoneNumber = exports.isName = exports.isEmail = exports.isDateFormat = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const isDateFormat_1 = __importDefault(require("./validation/input-types/isDateFormat"));
exports.isDateFormat = isDateFormat_1.default;
const isEmail_1 = __importDefault(require("./validation/input-types/isEmail"));
exports.isEmail = isEmail_1.default;
const isName_1 = __importDefault(require("./validation/input-types/isName"));
exports.isName = isName_1.default;
const isPhoneNumber_1 = __importDefault(require("./validation/input-types/isPhoneNumber"));
exports.isPhoneNumber = isPhoneNumber_1.default;
const isStrongPassword_1 = __importDefault(require("./validation/input-types/isStrongPassword"));
exports.isStrongPassword = isStrongPassword_1.default;
const isValidUrl_1 = __importDefault(require("./validation/input-types/isValidUrl"));
exports.isValidUrl = isValidUrl_1.default;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
const checkIsEmail = (email) => {
    return (0, isEmail_1.default)(email);
};
app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
