import React from "react";

import LockIcon from "@assets/lock.svg";
import { signUpPageContent as content } from "@content";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps, Step } from "../index";
import UserData from "./UserData";
import { StyledButton } from "./styled";

type Step2FormProps = StepFormProps & {
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
};

const { optionalData, placeholders, submitText } = content;

const Step2Form: React.FC<Step2FormProps> = ({ formik, setCurrentStep }) => (
  <>
    <UserData email={formik.values.email} password={formik.values.password} />
    <P light center>
      {optionalData}
    </P>
    <InputWithIcon
      icon={LockIcon}
      id="name"
      name="name"
      type="text"
      placeholder={placeholders.name}
      onChange={formik.handleChange}
      value={formik.values.name}
      maxLength={35}
      isTouched={formik.touched.name}
      error={formik.errors.name}
    />
    <InputWithIcon
      icon={LockIcon}
      id="surname"
      name="surname"
      type="text"
      placeholder={placeholders.surname}
      onChange={formik.handleChange}
      value={formik.values.surname}
      maxLength={35}
      isTouched={formik.touched.surname}
      error={formik.errors.surname}
    />
    <InputWithIcon
      icon={LockIcon}
      id="company"
      name="company"
      type="text"
      placeholder={placeholders.company}
      onChange={formik.handleChange}
      value={formik.values.company}
      maxLength={35}
      isTouched={formik.touched.company}
      error={formik.errors.company}
    />
    <StyledButton type="submit" onClick={() => formik.handleSubmit}>
      {submitText}
    </StyledButton>
    <Button secondary onClick={() => setCurrentStep(Step.first)}>
      {content.back}
    </Button>
  </>
);

export default Step2Form;
