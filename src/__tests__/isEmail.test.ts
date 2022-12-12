import { describe, expect, test } from "@jest/globals";
import { isEmail } from "../index";
describe("Test the is email function", async () => {
    test("Check isEmail function", () => {
        expect(isEmail("adrian.moloca@smartboxdigital")).toBeTruthy();
    });
});
