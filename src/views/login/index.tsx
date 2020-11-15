import React from "react";

import { GradientBg } from "@common";
import LoginForm from "./components/LoginForm";
import { FormikProps, useFormik } from "formik";
import { setError, validateEmail, validatePassword } from "@validators/authValidators";

type InitialValues = {
  email: string;
  password: string;
};

type ErrorObject = Partial<InitialValues>;

export type LoginFormProps = {
  formik: FormikProps<InitialValues>;
};

const LoginPage: React.FC = () => {
  const formik = useFormik<InitialValues>({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit(values) {
      console.log(values);
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
      <LoginForm formik={formik} />
    </GradientBg>
  );
};

export default LoginPage;
