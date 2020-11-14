import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps } from "../RegisterForm";
import { StyledButton } from "./styled";

const Step1Form: React.FC<StepFormProps> = ({ formik, setCurrentStep }) => (
  <>
    <InputWithIcon
      icon={LoginIcon}
      id="email"
      name="email"
      type="email"
      placeholder="E - mail"
      onChange={formik.handleChange}
      value={formik.values.email}
      required
    />
    <InputWithIcon
      icon={LockIcon}
      id="password"
      name="password"
      type="password"
      placeholder="Password"
      onChange={formik.handleChange}
      value={formik.values.password}
      required
    />
    <InputWithIcon
      icon={LockIcon}
      id="passwordRepeated"
      name="passwordRepeated"
      type="password"
      placeholder="Repeat password"
      onChange={formik.handleChange}
      value={formik.values.passwordRepeated}
      required
    />
    <StyledButton onClick={() => setCurrentStep(2)}>NEXT</StyledButton>
    <P center light>
      Do you have an account?{" "}
      <Button inline to="/login">
        Login here!
      </Button>
    </P>
  </>
);

export default Step1Form;
