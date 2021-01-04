import { ErrorObj, FieldValidator } from ".";

export const validateNumberField: FieldValidator<NumberFieldFormData> = (values) => {
  const errorObj: ErrorObj<NumberFieldFormData> = {};

  return errorObj;
};
