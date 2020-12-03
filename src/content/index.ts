export const singInPageContent = {
  greeting: "Welcome back !",
  demo: {
    message: "Would you like trying demo?",
    callToAction: "Click Here"
  },
  placeholders: {
    email: "E-mail",
    password: "Password"
  },
  createAccount: {
    message: "Don't have an account?",
    callToAction: "Register here!"
  },
  submitText: "Login"
};

export const signUpPageContent = {
  placeholders: {
    email: "E-mail",
    password: "Password",
    repeatPassword: "Repeat password",
    name: "Name",
    surname: "Surname",
    company: "Company"
  },
  next: "Next",
  toLoginPage: {
    message: "Do you have an account?",
    callToAction: "Login here!"
  },
  optionalData: "Personal data below are optional.",
  submitText: "Register",
  back: "Back"
};

export const formErrors = {
  email: {
    invalid: "Invalid email address.",
    required: "Email address is required.",
    tooLong: "Email is too long."
  },
  password: {
    required: "Password is required.",
    tooShort: "Password has to be longer than 7 characters.",
    tooLong: "Password has to be shorter than 35 characters.",
    withoutNumber: "Password should contain some numbers.",
    withoutUpper: "Password should contain some uppercase letter.",
    differentRepeat: "Passwords are not the same."
  },
  name: {
    invalid: "Name is incorrect."
  },
  surname: {
    invalid: "Surname is incorrect."
  },
  companyName: {
    tooLong: "Company name is too long."
  }
};
