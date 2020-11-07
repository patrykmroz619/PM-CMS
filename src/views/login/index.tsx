import React from "react";

import { GradientBg } from "@common";
import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <GradientBg>
      <LoginForm />
    </GradientBg>
  );
};

export default LoginPage;
