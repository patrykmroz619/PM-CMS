import { setError } from "validators/setError";
import { ErrorObj, FieldValidator } from ".";
import { validateFieldName } from "./validateFieldName";
import { fieldFormErrors as errors } from "@content";

export const validateNumberField: FieldValidator<NumberFieldFormData> = (values) => {
  const errorObj: ErrorObj<NumberFieldFormData> = {};

  setError(errorObj, "name", validateFieldName(values.name));

  if (values.max && values.min && values.max < values.min) {
    errorObj.max = errors.numberField.max;
  }

  return errorObj;
};
