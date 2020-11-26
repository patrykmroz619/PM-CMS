import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { FormikProps, useFormik } from "formik";

import { GradientBg } from "@common";
import { setError, validateEmail, validatePassword } from "@validators/authValidators";
import { signInUser } from "@fetch";
import { user } from "@selectors";
import LoginForm from "./components/LoginForm";

type ErrorObject = Partial<SignInFormData>;

export type LoginFormProps = {
  formik: FormikProps<SignInFormData>;
  error?: string;
  loading: boolean;
};

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(user.selectError);
  const loading = useSelector(user.selectLoading);

  const formik = useFormik<SignInFormData>({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit(values) {
      dispatch(signInUser(values));
    },
    validate(values) {
      const errors: ErrorObject = {};

      setError(errors, "email", validateEmail(values.email));
      setError(errors, "password", validatePassword(values.password));

      return errors;
    }
  });

  return (
    <GradientBg>
      <LoginForm formik={formik} error={error} loading={loading} />
    </GradientBg>
  );
};

export default LoginPage;
