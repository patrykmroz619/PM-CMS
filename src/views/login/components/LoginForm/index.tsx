import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { AuthForm, Button, P, InputWithIcon } from "@common";

const LoginForm: React.FC = () => (
  <AuthForm>
    <h1>Welcome back!</h1>
    <InputWithIcon icon={LoginIcon} type="text" name="login" placeholder="Nick / e-mail" required />
    <InputWithIcon
      icon={LockIcon}
      type="password"
      name="password"
      placeholder="Password"
      required
    />
    <P center light>
      Forgot password? <Button inline>Click Here</Button>
    </P>
    <Button type="submit">LOGIN</Button>
    <P center light>
      Don&apos;t have an account?{" "}
      <Button inline to="/register">
        Register here!
      </Button>
    </P>
  </AuthForm>
);

export default LoginForm;
