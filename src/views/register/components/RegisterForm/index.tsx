import React, { useState } from "react";
import { useFormik, FormikProps } from "formik";

import { AuthForm } from "@common";
import Step1Form from "../Step1Form";
import Step2Form from "../Step2Form";

export type InitialValues = {
  email: string;
  password: string;
  passwordRepeated: string;
  name: string;
  surname: string;
  company: string;
};

export type StepFormProps = {
  formik: FormikProps<InitialValues>;
  setCurrentStep: React.Dispatch<React.SetStateAction<1 | 2>>;
};

const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: "",
      password: "",
      passwordRepeated: "",
      name: "",
      surname: "",
      company: ""
    },
    onSubmit(values) {
      console.log(values);
    }
  });

  return (
    <AuthForm onSubmit={formik.handleSubmit}>
      {currentStep === 1 ? (
        <Step1Form formik={formik} setCurrentStep={setCurrentStep} />
      ) : (
        <Step2Form formik={formik} setCurrentStep={setCurrentStep} />
      )}
    </AuthForm>
  );
};

export default RegisterForm;
