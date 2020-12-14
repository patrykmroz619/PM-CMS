import { formErrors } from "@content";

type validateFunction = (value?: string | undefined) => string;

const { projectName, endpoint: endpointErrors } = formErrors;

export const validateProjectName: validateFunction = (name) => {
  let error = "";
  if (!name) {
    error = projectName.required;
  } else if (name.length > 35) {
    error = projectName.tooLong;
  } else if (name.length < 2) {
    error = projectName.tooShort;
  }

  return error;
};

export const validateApiEndpoint: validateFunction = (endpoint) => {
  let error = "";

  if (endpoint) {
    if (endpoint.length > 35) {
      error = endpointErrors.tooLong;
    } else if (endpoint.length < 2) {
      error = endpointErrors.tooShort;
    } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(endpoint)) {
      error = endpointErrors.invalid;
    }
  }

  return error;
};
