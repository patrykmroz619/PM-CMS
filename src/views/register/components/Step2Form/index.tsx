import React from "react";

import LockIcon from "@assets/lock.svg";
import { Button, InputWithIcon, P } from "@common";
import { StepFormProps } from "../RegisterForm";
import UserData from "./components/userData";
import { StyledButton } from "./styled";

const Step2Form: React.FC<StepFormProps> = ({ formik, setCurrentStep }) => (
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
    />
    <InputWithIcon
      icon={LockIcon}
      id="surname"
      name="surname"
      type="text"
      placeholder="Surname"
      onChange={formik.handleChange}
      value={formik.values.surname}
    />
    <InputWithIcon
      icon={LockIcon}
      id="company"
      name="company"
      type="text"
      placeholder="Company"
      onChange={formik.handleChange}
      value={formik.values.company}
    />
    <StyledButton type="submit">REGISTER</StyledButton>
    <Button secondary onClick={() => setCurrentStep(1)}>
      BACK
    </Button>
  </>
);

export default Step2Form;
