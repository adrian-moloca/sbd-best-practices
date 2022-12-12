import express from "express";
import { json } from "body-parser";
import isDateFormat from "./validation/input-types/isDateFormat";
import isEmail from "./validation/input-types/isEmail";
import isName from "./validation/input-types/isName";
import isPhoneNumber from "./validation/input-types/isPhoneNumber";
import isStrongPassword from "./validation/input-types/isStrongPassword";
import isValidUrl from "./validation/input-types/isValidUrl";

const app = express();
app.use(json());

const checkIsEmail = (email: string) => {
    return isEmail(email);
};

app.listen(5000, () => {
    return true;
});

export { isDateFormat, isEmail, isName, isPhoneNumber, isStrongPassword, isValidUrl };
