import { fieldFormErrors as content } from "@content";
import { validateFieldName } from "../validateFieldName";

describe("validateFieldName validator", () => {
  test("returns empty string when passed field name is correct", () => {
    const fieldName = "Title";

    expect(validateFieldName(fieldName)).toBe("");
  });

  test("returns error when passed field name is incorrect", () => {
    const emptyFieldName = "";
    const tooLong = "asdasdasdasdasdasdasdasdasdasdasdasd";

    expect(validateFieldName(emptyFieldName)).toBe(content.requiredFieldName);
    expect(validateFieldName(tooLong)).toBe(content.tooLongName);
  });
});
