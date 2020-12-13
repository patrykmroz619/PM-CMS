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
import { userActions } from "@actions";

export type StepFormProps = {
  formik: FormikProps<SignUpFormData>;
};

export enum Step {
  first = 1,
  second
}

type ErrorObject = Partial<SignUpFormData>;

const initialValues: SignUpFormData = {
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
  const [isformValid, setIsFormValid] = useState<boolean>(false);

  const authError = useSelector(userSelector.error);
  const loading = useSelector(userSelector.loading);

  const formik = useFormik<SignUpFormData>({
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

      setIsFormValid(Object.keys(errors).length == 0);

      return errors;
    }
  });

  if (authError && currentStep == Step.second) {
    setCurrentStep(Step.first);
    formik.resetForm();
  }

  const handleClickNext = () => {
    formik.setTouched({ email: true, password: true, passwordRepeated: true });

    if (isformValid) {
      setCurrentStep(Step.second);
    }
  };

  const handleClickLoginLink = () => {
    dispatch(userActions.clearError());
  };

  return (
    <AuthForm onSubmit={formik.handleSubmit} loading={loading ? 1 : 0}>
      {currentStep === Step.first ? (
        <Step1Form
          formik={formik}
          handleClickNext={handleClickNext}
          handleClickLoginLink={handleClickLoginLink}
          error={authError}
        />
      ) : (
        <Step2Form formik={formik} setCurrentStep={setCurrentStep} />
      )}
    </AuthForm>
  );
};

export default RegisterForm;
