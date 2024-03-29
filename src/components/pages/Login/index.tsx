import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { AuthLayout } from "@layout";
import { authValidator, setError } from "@validators";
import { signInUser } from "@fetch";
import { userSelector } from "@selectors";

import LoginForm from "./LoginForm";
import { userActions } from "@actions";

type ErrorObject = Partial<SignInFormData>;

const { validateEmail } = authValidator;

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

      return formErrors;
    }
  });

  const handleOnLinkClick = useCallback(() => {
    dispatch(userActions.clearError());
  }, []);

  return (
    <AuthLayout>
      <LoginForm
        formik={formik}
        error={authError}
        loading={loading}
        handleOnLinkClick={handleOnLinkClick}
      />
    </AuthLayout>
  );
};

export default LoginPage;
