import React, { useState } from "react";
import { useFormik, FormikProps } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { signUpUser } from "@fetch";
import { userSelector } from "@selectors";
import { AuthForm } from "@common";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordRepeated,
  validateCompanyName,
  validateSurname,
  setError
} from "@validators/authValidators";

export type InitialValues = SignUpFormData & { passwordRepeated: string };

export type StepFormProps = {
  formik: FormikProps<InitialValues>;
};

export enum Step {
  first,
  second
}

type ErrorObject = Partial<InitialValues>;

const initialValues: InitialValues = {
  email: "",
  password: "",
  passwordRepeated: "",
  name: "",
  surname: "",
  company: ""
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState<Step>(Step.first);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const authError = useSelector(userSelector.error);
  const loading = useSelector(userSelector.loading);

  const formik = useFormik<InitialValues>({
    initialValues,
    onSubmit(values) {
      dispatch(signUpUser(values));
    },
    validate(values) {
      const errors: ErrorObject = {};

      if (currentStep == Step.first) {
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

  if (authError && currentStep == Step.second) {
    setCurrentStep(Step.first);
    formik.resetForm();
  }

  const handleClickNext = () => {
    formik.setTouched({ email: true, password: true, passwordRepeated: true });

    if (formik.isValid && isValidated) {
      setCurrentStep(Step.second);
    }
  };

  return (
    <AuthForm onSubmit={formik.handleSubmit} loading={loading ? 1 : 0}>
      {currentStep === Step.first ? (
        <Step1Form formik={formik} handleClickNext={handleClickNext} error={authError} />
      ) : (
        <Step2Form formik={formik} setCurrentStep={setCurrentStep} />
      )}
    </AuthForm>
  );
};

export default RegisterForm;
