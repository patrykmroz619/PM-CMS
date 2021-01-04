import { validateTextField } from "./validateTextField";
import { validateNumberField } from "./validateNumberField";

export type FieldValidator<T extends ContentFieldFormData> = (
  values: T
) => Partial<Record<keyof T, string | undefined>>;

type Error = string | undefined;

export type ErrorObj<T> = Partial<Record<keyof T, Error>>;

export const validateField = (values: ContentFieldFormData): ErrorObj<ContentFieldFormData> => {
  switch (values.type) {
    case "text":
      return validateTextField(values);
    case "number":
      return validateNumberField(values);
  }

  return {};
};
