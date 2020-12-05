import React from "react";

import { AuthLayout } from "@layout";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
