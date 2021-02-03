import { formErrors } from "@content";

type validateFunction = (value: string | undefined, value2?: string | undefined) => string;

const { email, password, name, surname, companyName } = formErrors;

export const validateEmail: validateFunction = (value) => {
  let error = "";
  if (!value) {
    error = email.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = email.invalid;
  } else if (value.length > 35) {
    error = email.tooLong;
  }

  return error;
};

export const validatePassword: validateFunction = (value) => {
  let error = "";
  if (!value) {
    error = password.required;
  } else if (value.length < 5) {
    error = password.tooShort;
  } else if (!/\d/.test(value)) {
    error = password.withoutNumber;
  } else if (!/[A-Z]/.test(value)) {
    error = password.withoutUpper;
  }

  return error;
};

export const validatePasswordRepeated: validateFunction = (value, value2) => {
  let error = "";
  if (value !== value2) {
    error = password.differentRepeat;
  }

  return error;
};

export const validateCompanyName: validateFunction = (value) => {
  let error = "";

  if (value) {
    if (value.length > 35) {
      error = companyName.tooLong;
    }
  }

  return error;
};

const validateNameOrSurname = (field: "Name" | "Surname", value: string | undefined): string => {
  let error = "";

  if (value) {
    if (!/^[a-zA-ZąĄćĆęĘśŚóÓłŁńŃżŻźŹ][a-zA-ZąĄćĆęĘśŚóÓłŁńŃżŻźŹ ,'-]{2,33}$/.test(value)) {
      error = field == "Name" ? name.invalid : surname.invalid;
    }
  }

  return error;
};

export const validateName: validateFunction = (value) => validateNameOrSurname("Name", value);

export const validateSurname: validateFunction = (value) => validateNameOrSurname("Surname", value);
