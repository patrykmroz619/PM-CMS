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
    tooShort: "Password has to be longer than 4 characters.",
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
  addFieldButton: "+ add field",
  addRecordButton: "+ add record",
  lackOfFields: {
    message: "You need add some fields to this content model.",
    button: "add field"
  },
  newFieldPanel: {
    label: "Add new field.",
    submit: "add field",
    cancel: "cancel"
  },
  updateFieldPanel: {
    label: "Update field.",
    submit: "update",
    delete: "delete",
    cancel: "cancel"
  }
} as const;

export const fieldForms = {
  textField: {
    name: {
      label: "Field name",
      placeholder: "Title"
    },
    min: {
      label: "Min. length",
      placeholder: "0"
    },
    max: {
      label: "Max. length",
      placeholder: "Unlimited"
    },
    unique: "Unique value",
    multiline: "Multi-line text"
  },
  numberField: {
    name: {
      label: "Field name",
      placeholder: "Quantity"
    },
    min: {
      label: "Min. value"
    },
    max: {
      label: "Max. value"
    },
    unique: "Unique value",
    integer: "Integer value"
  },
  booleanField: {
    name: {
      label: "Field name",
      placeholder: "Is public"
    }
  },
  dateField: {
    name: {
      label: "Field name",
      placeholder: "Event's date"
    },
    value: {
      label: "Date",
      placeholder: "12-12-2012"
    }
  },
  colorField: {
    name: {
      label: "Field name",
      placeholder: "Basic color"
    }
  }
} as const;

export const fieldFormErrors = {
  tooLongName: "The value has to be shorter than 35 characters.",
  requiredFieldName: "Field name is required.",
  textField: {
    positiveNumber: "The value has to be a positive number.",
    maxlength: "The value has to be greather than the min. length value."
  },
  numberField: {
    max: "The value has to be greather than the min. value."
  }
} as const;

export const singleRecordPage = {
  updateRecordButton: "update",
  deleteRecordButton: "delete",
  deleteMessage: "Are you sure to delete this record?"
} as const;

export const profilePage = {
  errorMessage: "Something went wrong! Reload the page or try again later.",
  reloadButton: "Reload page",
  passwordButton: "Change password",
  updateDataButton: "Update data",
  deleteAccountButton: "Delete account",
  deleteMessage: "Are you sure you want to delete your account? All data will be lost.",
  updatePasswordForm: {
    currentPassword: "Current password",
    newPassword: "New password",
    repeatPassword: "Repeat password",
    submit: "Change password"
  },
  updateUserDataForm: {
    name: "Name",
    surname: "Surname",
    company: "Company name",
    submit: "Update data"
  }
} as const;

export const settingsPage = {
  name: "Project name",
  dangerZone: "Danger zone"
} as const;

export const logoutView = {
  message: "Do you want to logout now?"
} as const;

export const footer = "ⓒ 2020-2021 PM CMS - Headless CMS | Patryk Mróz" as const;
