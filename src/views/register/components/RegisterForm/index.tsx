import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { AuthForm, Button, P, InputWithIcon } from "@common";

const RegisterForm: React.FC = () => (
  <AuthForm>
    <InputWithIcon icon={LoginIcon} type="text" placeholder="Nick" name="login" required />
    <InputWithIcon icon={LoginIcon} type="email" placeholder="E - mail" name="e-mail" required />
    <InputWithIcon
      icon={LockIcon}
      type="password"
      placeholder="Password"
      name="password"
      required
    />
    <InputWithIcon
      icon={LockIcon}
      type="password"
      placeholder="Repeat password"
      name="repeatPassword"
      required
    />
    <Button>NEXT</Button>
    <P center light>
      Do you have an account?{" "}
      <Button inline to="/login">
        Login here!
      </Button>
    </P>
  </AuthForm>
);

export default RegisterForm;
