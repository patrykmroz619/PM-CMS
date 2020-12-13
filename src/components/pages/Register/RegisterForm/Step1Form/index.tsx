import React from "react";

import LoginIcon from "@assets//login.svg";
import LockIcon from "@assets/lock.svg";
import { signUpPageContent as content } from "@content";
import routes from "@routes";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps } from "../index";
import { StyledButton } from "./styled";

type Step1FormProps = StepFormProps & {
  handleClickNext: () => void;
  error: string | undefined;
  handleClickLoginLink: () => void;
};

const { placeholders, toLoginPage } = content;

const Step1Form: React.FC<Step1FormProps> = ({
  formik,
  handleClickNext,
  handleClickLoginLink,
  error
}) => (
  <>
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
    <InputWithIcon
      icon={LockIcon}
      name="passwordRepeated"
      type="password"
      placeholder={placeholders.repeatPassword}
      onChange={formik.handleChange}
      value={formik.values.passwordRepeated}
      maxLength={35}
      isTouched={formik.touched.passwordRepeated}
      error={formik.errors.passwordRepeated}
    />
    <StyledButton type="button" onClick={handleClickNext}>
      {content.next}
    </StyledButton>
    <P center light>
      {toLoginPage.message + " "}
      <Button inline to={routes.login} onClick={handleClickLoginLink}>
        {toLoginPage.callToAction}
      </Button>
    </P>
  </>
);

export default Step1Form;
