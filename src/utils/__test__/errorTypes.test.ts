import { isApiError } from "../errorTypes";

describe("Error type guards", () => {
  test("isApiError type guard return true when corrent error object was passed.", () => {
    const error: ApiError = {
      statusCode: 200,
      error: {
        type: "ERROR_TYPE",
        description: "Description of an error."
      }
    };

    expect(isApiError(error)).toBeTruthy();
  });

  test("isApiError type guard return false when corrent error object was passed.", () => {
    const error1 = {
      error: {
        type: "ERROR_TYPE",
        description: "Description of an error."
      }
    };

    const error2 = {
      statusCode: 200,
      error: {
        description: "Description of an error."
      }
    };

    const error3 = {
      statusCode: 200,
      error: {
        type: "ERROR_TYPE"
      }
    };

    expect(isApiError(error1)).toBeFalsy();
    expect(isApiError(error2)).toBeFalsy();
    expect(isApiError(error3)).toBeFalsy();
  });
});
