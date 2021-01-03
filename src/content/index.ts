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
} as const;

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
} as const;

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
  },
  projectName: {
    required: "The project name is required.",
    tooLong: "The project name is too long.",
    tooShort: "The project name has to have 2 characters at least."
  },
  endpoint: {
    invalid: "The api endpoint is incorrect.",
    tooLong: "The api endpoint is too long.",
    tooShort: "The api endpoint is too short."
  }
} as const;

export const subheadings = {
  projects: "Projects list",
  newProject: "New project",
  content: "Content models",
  newContentModel: "New content model",
  media: "Media",
  profile: "Profile",
  settings: "Settings",
  addProject: "Add new project"
} as const;

export const projectsPage = {
  lackOfProjects: "Your projects collection is empty.",
  addProjecBtn: "+ add project"
} as const;

export const newProjectForm = {
  heading: "Create new project",
  nameInput: {
    label: "Name",
    placeholder: "My new project"
  },

  submit: "confirm"
} as const;

export const newContentModelForm = {
  heading: "Add content model",
  nameInput: {
    label: "Name",
    placeholder: "Article"
  },
  endpointInput: {
    label: "Api endpoint",
    placeholder: "article"
  },
  submit: "confirm"
};

export const contentModelsPage = {
  lackOfContentModels: {
    message: "You haven't created any content models. Let's add your first one!",
    button: "add model"
  },
  newModelButton: "+ new model",
  lackOfFields: {
    message: "You need add some fields to this content model.",
    button: "add field"
  }
} as const;

export const footer = "ⓒ 2020-2021 PM CMS - Headless CMS | Patryk Mróz" as const;
