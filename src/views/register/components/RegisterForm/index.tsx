import React, { useState } from "react";
import { useFormik, FormikProps } from "formik";

import { AuthForm } from "@common";
import Step1Form from "../Step1Form";
import Step2Form from "../Step2Form";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordRepeated,
  validateCompanyName,
  validateSurname,
  setError
} from "@validators/authValidators";

export type InitialValues = {
  email: string;
  password: string;
  passwordRepeated: string;
  name: string;
  surname: string;
  company: string;
};

type ErrorObject = Partial<InitialValues>;

export type StepFormProps = {
  formik: FormikProps<InitialValues>;
};

const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const initialValues: InitialValues = {
    email: "",
    password: "",
    passwordRepeated: "",
    name: "",
    surname: "",
    company: ""
  };

  const formik = useFormik<InitialValues>({
    initialValues,
    onSubmit(values) {
      console.log(values);
      // action.setSubmitting(false);
    },
    validate(values) {
      const errors: ErrorObject = {};

      if (currentStep == 1) {
        setError(errors, "email", validateEmail(values.email));
        setError(errors, "password", validatePassword(values.password));
        setError(
          errors,
          "passwordRepeated",
          validatePasswordRepeated(values.password, values.passwordRepeated)
        );
      } else {
        setError(errors, "name", validateName(values.name));
        setError(errors, "surname", validateSurname(values.surname));
        setError(errors, "company", validateCompanyName(values.company));
      }

      if (!isValidated) setIsValidated(true);

      return errors;
    }
  });

  const handleClickNext = () => {
    formik.setTouched({ email: true, password: true, passwordRepeated: true });

    if (formik.isValid && isValidated) {
      setCurrentStep(2);
    }
  };

  return (
    <AuthForm onSubmit={formik.handleSubmit}>
      {currentStep === 1 ? (
        <Step1Form formik={formik} handleClickNext={handleClickNext} />
      ) : (
        <Step2Form formik={formik} setCurrentStep={setCurrentStep} />
      )}
    </AuthForm>
  );
};

export default RegisterForm;
