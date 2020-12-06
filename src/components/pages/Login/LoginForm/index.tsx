import React from "react";
import { FormikProps } from "formik";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { singInPageContent as content } from "@content";
import routes from "@routes";
import { AuthForm, Button, P, InputWithIcon } from "@common";

type LoginFormProps = {
  formik: FormikProps<SignInFormData>;
  error?: string;
  loading: boolean;
};

const { placeholders, greeting, submitText, createAccount } = content;

const LoginForm = ({ formik, error, loading }: LoginFormProps) => (
  <AuthForm onSubmit={formik.handleSubmit} loading={loading ? 1 : 0}>
    <h1>{greeting}</h1>
    {error ? <p className="error">{error}</p> : null}
    <InputWithIcon
      icon={LoginIcon}
      name="email"
      type="email"
      placeholder={placeholders.email}
      onChange={formik.handleChange}
      value={formik.values.email}
      maxLength={35}
      isTouched={formik.touched.email}
      error={formik.errors.email}
    />
    <InputWithIcon
      icon={LockIcon}
      name="password"
      type="password"
      placeholder={placeholders.password}
      onChange={formik.handleChange}
      value={formik.values.password}
      maxLength={35}
      isTouched={formik.touched.password}
      error={formik.errors.password}
    />
    <Button type="submit" onClick={() => formik.handleSubmit}>
      {submitText}
    </Button>
    <P center light>
      {createAccount.message + " "}
      <Button inline to={routes.register}>
        {createAccount.callToAction}
      </Button>
    </P>
  </AuthForm>
);

export default LoginForm;
