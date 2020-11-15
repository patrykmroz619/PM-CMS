type validateFunction = (value: string | undefined, value2?: string | undefined) => string;

type Error = string | undefined;
type ErrorObject<T> = Partial<Record<keyof T, Error>>;

export const setError = <T>(obj: ErrorObject<T>, key: keyof T, error: Error): void => {
  if (error) {
    obj[key] = error;
  }
};

export const validateEmail: validateFunction = (value) => {
  let error = "";
  if (!value) {
    error = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address.";
  } else if (value.length > 35) {
    error = "Email is too long. It has to be shorter than 35 characters.";
  }

  return error;
};

export const validatePassword: validateFunction = (value) => {
  let error = "";
  if (!value) {
    error = "Password is required.";
  } else if (value.length < 8) {
    error = "Password has to be longer than 8 characters.";
  } else if (value.length > 35) {
    error = "Password has to be shorter than 35 characters.";
  } else if (!/\d/.test(value)) {
    error = "Password should contain some numbers.";
  } else if (!/[A-Z]/.test(value)) {
    error = "Password should contain some uppercase letter.";
  }

  return error;
};

export const validatePasswordRepeated: validateFunction = (value, value2) => {
  let error = "";
  if (value !== value2) {
    error = "Passwords are not the same.";
  }

  return error;
};

export const validateCompanyName: validateFunction = (value) => {
  let error = "";

  if (value) {
    if (value?.length > 35) {
      error = "Company name is too long.";
    }
  }

  return error;
};

const validateNameOrSurname = (field: string, value: string | undefined): string => {
  let error = "";

  if (value) {
    if (!/^[a-zA-Z][a-zA-Z-']{2,33}$/.test(value)) {
      error = `${field} is incorrect.`;
    }
  }

  return error;
};

export const validateName: validateFunction = (value) => validateNameOrSurname("Name", value);

export const validateSurname: validateFunction = (value) => validateNameOrSurname("Surname", value);
