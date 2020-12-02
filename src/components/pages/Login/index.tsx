import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { GradientBg } from "@common";
import { setError, validateEmail, validatePassword } from "@validators/authValidators";
import { signInUser } from "@fetch";
import { userSelector } from "@selectors";

import LoginForm from "./LoginForm";

type ErrorObject = Partial<SignInFormData>;

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const authError = useSelector(userSelector.error);
  const loading = useSelector(userSelector.loading);

  const formik = useFormik<SignInFormData>({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit(formData) {
      dispatch(signInUser(formData));
    },
    validate(formData) {
      const formErrors: ErrorObject = {};

      setError(formErrors, "email", validateEmail(formData.email));
      setError(formErrors, "password", validatePassword(formData.password));

      return formErrors;
    }
  });

  return (
    <GradientBg>
      <LoginForm formik={formik} error={authError} loading={loading} />
    </GradientBg>
  );
};

export default LoginPage;
