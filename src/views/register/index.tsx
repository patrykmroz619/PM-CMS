import React from "react";

import { GradientBg } from "@common";
import RegisterForm from "./components/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <GradientBg>
      <RegisterForm />
    </GradientBg>
  );
};

export default RegisterPage;
