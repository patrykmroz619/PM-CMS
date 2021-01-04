import { fieldFormErrors as content } from "@content";

export const validateFieldName = (fieldName: string) => {
  if (!fieldName) {
    return content.requiredFieldName;
  }

  if (fieldName.length > 35) {
    return content.tooLongName;
  }

  return "";
};
