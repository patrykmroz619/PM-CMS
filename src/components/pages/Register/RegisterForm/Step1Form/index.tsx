import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps } from "../index";
import { StyledButton } from "./styled";

type Step1FormProps = StepFormProps & { handleClickNext: () => void; error: string | undefined };

const Step1Form: React.FC<Step1FormProps> = ({ formik, handleClickNext, error }) => (
  <>
    {error ? <p className="error">{error}</p> : null}
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
    <InputWithIcon
      icon={LockIcon}
      name="passwordRepeated"
      type="password"
      placeholder="Repeat password"
      onChange={formik.handleChange}
      value={formik.values.passwordRepeated}
      maxLength={35}
      isTouched={formik.touched.passwordRepeated}
      error={formik.errors.passwordRepeated}
    />
    <StyledButton type="button" onClick={handleClickNext}>
      NEXT
    </StyledButton>
    <P center light>
      Do you have an account?{" "}
      <Button inline to="/login">
        Login here!
      </Button>
    </P>
  </>
);

export default Step1Form;
