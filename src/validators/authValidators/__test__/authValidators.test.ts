import {
  setError,
  validateCompanyName,
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordRepeated,
  validateSurname
} from "../.";

describe("auth validate functions", () => {
  describe("setError helper function", () => {
    test("creates new property in the object", () => {
      const object = {};
      setError(object, "key", "value");
      expect(object).toEqual({ key: "value" });
    });

    test("do not create new propery in the object when passed value is undefined", () => {
      const object = {};
      setError(object, "key", undefined);
      expect(object).toEqual({});
    });
  });

  describe("validateEmail function", () => {
    test('returns "Email is required." when passed empty value', () => {
      const expected = "Email is required.";

      let result = validateEmail("");
      expect(result).toBe(expected);

      result = validateEmail(undefined);
      expect(result).toBe(expected);
    });

    test('returns "Invalid email address." when passed invalid email', () => {
      const expected = "Invalid email address.";

      const invalidEmails = [
        "email.example.com",
        "@example.com",
        "email@111.222.333.44444",
        "123@examplecom"
      ];

      invalidEmails.forEach((email) => {
        const result = validateEmail(email);
        expect(result).toBe(expected);
      });
    });

    test("returns error when passed email is too long", () => {
      const expected = "Email is too long. It has to be shorter than 35 characters.";

      const longEmail = "thisisveryveryloongemail@example.com";

      const result = validateEmail(longEmail);

      expect(result).toBe(expected);
    });

    test("returns empty string when email is correct", () => {
      const emails = [
        "email@example.com",
        "firstname.lastname@example.com",
        "email@subdomain.example.com",
        "firstname+lastname@example.com",
        "1234567890@example.com",
        "email@example-one.com"
      ];

      emails.forEach((email) => {
        const result = validateEmail(email);
        expect(result).toBe("");
      });
    });
  });

  describe("validatePassword function", () => {
    test('returns "Password is required." when passed empty value', () => {
      const expected = "Password is required.";

      let result = validatePassword("");
      expect(result).toBe(expected);

      result = validatePassword(undefined);
      expect(result).toBe(expected);
    });

    test('returns "Password has to be longer than 7 characters." when passed the password is too short', () => {
      const expected = "Password has to be longer than 7 characters.";
      const shortPassword = "pass123";

      const result = validatePassword(shortPassword);
      expect(result).toBe(expected);
    });

    test('returns "Password has to be shorter than 35 characters." when passed the password is too long', () => {
      const expected = "Password has to be shorter than 35 characters.";
      const longPassword = "passwordPasswordPassword0123456789!";

      const result = validatePassword(longPassword);
      expect(result).toBe(expected);
    });

    test('returns "Password should contain some numbers" when passed the password without numbers', () => {
      const expected = "Password should contain some numbers.";
      const passwordWithoutNumbers = "Password!";

      const result = validatePassword(passwordWithoutNumbers);
      expect(result).toBe(expected);
    });

    test('returns "Password should contain some uppercase letter" when passed the lowercase password', () => {
      const expected = "Password should contain some uppercase letter.";
      const lowercasePassword = "password1!";

      const result = validatePassword(lowercasePassword);
      expect(result).toBe(expected);
    });

    test("return empty string when the password is correct", () => {
      const expected = "";
      const correctPasswords = ["passworD123", "Secret.999", "123pasS..."];

      correctPasswords.forEach((pass) => {
        const result = validatePassword(pass);
        expect(result).toBe(expected);
      });
    });
  });

  describe("validatePasswordRepeated function", () => {
    test('returns "Passwords are not the same." when the passed passwords are different', () => {
      const expected = "Passwords are not the same.";
      const password1 = "Password1";
      const password2 = "Password2";

      const result = validatePasswordRepeated(password1, password2);
      expect(result).toBe(expected);
    });

    test("returns empty string when passwords are not different", () => {
      const expected = "";
      const password = "Password123";

      const result = validatePasswordRepeated(password, password);
      expect(result).toBe(expected);
    });
  });

  describe("validateCompanyName function", () => {
    test('returns "Company name is too long." when passed name is longer than 34 characters', () => {
      const expected = "Company name is too long.";
      const longName = "looooooooooooooooooooooooooooongName";

      const result = validateCompanyName(longName);
      expect(result).toBe(expected);
    });

    test("returns empty string when passed company name is correct", () => {
      const expected = "";
      const name = "Company Name";

      const result = validateCompanyName(name);
      expect(result).toBe(expected);
    });

    test("returns empty string when passed company name is undefined", () => {
      const expected = "";
      const result = validateCompanyName(undefined);
      expect(result).toBe(expected);
    });
  });

  describe("validateName and validateSurname function", () => {
    test("returns error message when passed value is incorrect", () => {
      const validators = {
        Name: validateName,
        Surname: validateSurname
      };

      const incorectValue = "patr ick";

      for (const [key, value] of Object.entries(validators)) {
        const result = value(incorectValue);
        expect(result).toBe(`${key} is incorrect.`);
      }
    });

    test("return empty string when passed value is correct", () => {
      const validators = {
        Name: validateName,
        Surname: validateSurname
      };

      const incorectValue = "patrick";

      for (const validator of Object.values(validators)) {
        const result = validator(incorectValue);
        expect(result).toBe("");
      }
    });

    test("return empty string when passed value is undefined", () => {
      const validators = {
        Name: validateName,
        Surname: validateSurname
      };

      for (const validator of Object.values(validators)) {
        const result = validator(undefined);
        expect(result).toBe("");
      }
    });
  });
});
