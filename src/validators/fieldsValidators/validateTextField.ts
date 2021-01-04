import { setError } from "../setError";
import { ErrorObj, FieldValidator } from ".";
import { validateFieldName } from "./validateFieldName";

import { fieldFormErrors as content } from "@content";

export const validateTextField: FieldValidator<TextFieldFormData> = (values) => {
  const errorObj: ErrorObj<TextFieldFormData> = {};

  setError(errorObj, "name", validateFieldName(values.name));

  if (values.minLength && values.minLength < 0) {
    errorObj.minLength = content.textField.positiveNumber;
  }

  if (values.maxLength) {
    if (values.maxLength < 0) {
      errorObj.maxLength = content.textField.positiveNumber;
    } else if (values.minLength && values.maxLength < values.minLength) {
      errorObj.maxLength = content.textField.maxlength;
    }
  }

  return errorObj;
};
