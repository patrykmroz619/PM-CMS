import React from "react";

import LockIcon from "@assets/lock.svg";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps, Step } from "../index";
import UserData from "./UserData";
import { StyledButton } from "./styled";

type Step2FormProps = StepFormProps & {
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
};

const Step2Form: React.FC<Step2FormProps> = ({ formik, setCurrentStep }) => (
  <>
    <UserData email={formik.values.email} password={formik.values.password} />
    <P light center>
      Personal data below are optional.
    </P>
    <InputWithIcon
      icon={LockIcon}
      id="name"
      name="name"
      type="text"
      placeholder="Name"
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
      placeholder="Surname"
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
      placeholder="Company"
      onChange={formik.handleChange}
      value={formik.values.company}
      maxLength={35}
      isTouched={formik.touched.company}
      error={formik.errors.company}
    />
    <StyledButton type="submit" onClick={() => formik.handleSubmit}>
      REGISTER
    </StyledButton>
    <Button secondary onClick={() => setCurrentStep(1)}>
      BACK
    </Button>
  </>
);

export default Step2Form;
