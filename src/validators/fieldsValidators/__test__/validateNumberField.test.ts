import { fieldFormErrors as errors } from "@content";
import { validateNumberField } from "../validateNumberField";

describe("validateNumberField", () => {
  test("returns empty object when passed data is correct", () => {
    expect(
      validateNumberField({ type: "number", name: "name", unique: false, integer: true })
    ).toEqual({});
  });

  test("returns error of max property when max property is equal or less than min property", () => {
    expect(
      validateNumberField({
        type: "number",
        name: "name",
        unique: false,
        integer: true,
        min: 10,
        max: 9
      })
    ).toEqual({ max: errors.numberField.max });
  });
});
