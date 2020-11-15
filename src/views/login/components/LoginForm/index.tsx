import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { AuthForm, Button, P, InputWithIcon } from "@common";
import { LoginFormProps } from "../../";

const LoginForm: React.FC<LoginFormProps> = ({ formik }) => (
  <AuthForm onSubmit={formik.handleSubmit}>
    <h1>Welcome back!</h1>
    <InputWithIcon
      icon={LoginIcon}
      name="email"
      type="email"
      placeholder="E - mail"
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
      placeholder="Password"
      onChange={formik.handleChange}
      value={formik.values.password}
      maxLength={35}
      isTouched={formik.touched.password}
      error={formik.errors.password}
    />
    <P center light>
      Forgot password? <Button inline>Click Here</Button>
    </P>
    <Button type="submit" onClick={() => formik.handleSubmit}>
      LOGIN
    </Button>
    <P center light>
      Don&apos;t have an account?{" "}
      <Button inline to="/register">
        Register here!
      </Button>
    </P>
  </AuthForm>
);

export default LoginForm;
