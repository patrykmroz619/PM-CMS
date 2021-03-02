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
  successNotification: "A new project was created.",
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
  successNotification: "A new content has been created.",
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
  addRecordSuccessNotification: "The new record has been added.",
  lackOfFields: {
    message: "You need add some fields to this content model.",
    button: "add field"
  },
  newFieldPanel: {
    label: "Add new field.",
    submit: "add field",
    successNotification: "The new field has been created.",
    cancel: "cancel"
  },
  updateFieldPanel: {
    label: "Update field.",
    submit: "update",
    delete: "delete",
    successUpdateNotification: "The field has been updated.",
    successDeleteNotification: "The field has been deleted.",
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
  successUpdateNotification: "The record has been updated.",
  deleteRecordButton: "delete",
  deleteMessage: "Are you sure to delete this record?",
  successDeleteNotification: "The record has been deleted.",
  rejectedDeleteNotification: "Failed to delete record. Sorry."
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
    successNotification: "Your password has been changed.",
    submit: "Change password"
  },
  updateUserDataForm: {
    name: "Name",
    surname: "Surname",
    company: "Company name",
    submit: "Update data",
    successNotification: "Your personal data has been updated."
  }
} as const;

export const settingsPage = {
  name: "Project name",
  enableUpdateName: "Click to update",
  confirmUpdateName: "Confirm",
  updateNameSuccessNotification: "Project name has been updated.",
  publishingHeading: "Publish project",
  publishedInfo: "Your project is published. You can use the api on the websites or applications.",
  publishedNotification: "Your project has been published.",
  notPublishedInfo:
    "Your project isn't published. The api isn't available on the any websites or applications.",
  notPublishedNotification: "Your project is unavailable.",
  dangerZone: "Danger zone",
  deleteModelBtn: "Delete model",
  deleteModelError: "Deleting of the content model was not passed. Please try again later.",
  deleteModelSuccessNotification: "The content model has been deleted.",
  deleteProjectBtn: "Delete project",
  deleteProjectMessage:
    "Are you sure you want to delete this project? All data will be lost irrevocably.",
  deleteProjectSuccessMessage: "Your project has been deleted.",
  deleteProjectErrorMessage: "Error has occured. Please try again later.",
  apiKey: "Api key",
  generateMessage: "Api key has not generated yet.",
  generateSubmit: "Generate",
  generateSuccessNotification: "The api key has been generated.",
  generateErrorNotification: "The error has occured.",
  regenerateSubmit: "Re-generate",
  copyToClipboardNotification: "Api key coppied to the clipboard."
} as const;

export const logoutView = {
  message: "Do you want to logout now?"
} as const;

export const footer = "ⓒ 2020-2021 PM CMS - Headless CMS | Patryk Mróz" as const;
