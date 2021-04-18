import { formErrors } from "@content";
import { validateApiEndpoint, validateProjectName } from "../projectDataValidators";

const { projectName, endpoint: endpointErrors } = formErrors;

describe("Project data validators", () => {
  test("validateProjectName returns empty string when passed name is correct", () => {
    const validName = "Project";

    expect(validateProjectName(validName)).toBe("");
  });

  test("validatorProjectName returns specific errors when passed name is incorrect", () => {
    const tooShortName = "A";
    const tooLongName = "asdqwewaseqweqweqweqweqweqwdasdqweasdqwe";
    const emptyName = "";

    expect(validateProjectName(tooShortName)).toBe(projectName.tooShort);
    expect(validateProjectName(tooLongName)).toBe(projectName.tooLong);
    expect(validateProjectName(emptyName)).toBe(projectName.required);
  });

  test("validateApiEndpoint returns empty string when passed endpoint is correct", () => {
    const validEndpoint = "project-2";

    expect(validateApiEndpoint(validEndpoint)).toBe("");
  });

  test("validatorApiEndpoint returns specific errors when passed endpoint is incorrect", () => {
    const tooShortEndpoint = "a";
    const tooLongEndpoint = "asdq-wewaseqweq-weqweqweqwe-qwdasdqw";
    const invalidEndpoint = "asd-2- a";

    expect(validateApiEndpoint(tooShortEndpoint)).toBe(endpointErrors.tooShort);
    expect(validateApiEndpoint(tooLongEndpoint)).toBe(endpointErrors.tooLong);
    expect(validateApiEndpoint(invalidEndpoint)).toBe(endpointErrors.invalid);
  });
});
