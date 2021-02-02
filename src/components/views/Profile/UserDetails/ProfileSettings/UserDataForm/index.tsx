import React from "react";
import { useFormik } from "formik";

import { profilePage } from "@content";
import { authValidator, setError } from "@validators";

import { Button, Form, Input, Modal } from "@common";
import * as S from "./styled";

type ErrorObject = Partial<PersonalUserData>;

type PasswordFormProps = {
  isOpen: boolean;
  close: () => void;
};

const { updateUserDataForm: content } = profilePage;

const initialFormValues: PersonalUserData = {
  name: "",
  surname: "",
  company: ""
};

const { validateName, validateSurname, validateCompanyName } = authValidator;

const UserDataForm = ({ isOpen, close }: PasswordFormProps) => {
  const formik = useFormik<PersonalUserData>({
    initialValues: initialFormValues,
    onSubmit(values) {
      console.log(values); //TODO: communicate with backend
    },
    validate(values) {
      const errors: ErrorObject = {};

      setError(errors, "name", validateName(values.name));
      setError(errors, "surname", validateSurname(values.surname));
      setError(errors, "company", validateCompanyName(values.company));

      return errors;
    }
  });

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">{content.name}</label>
        <Input
          id="name"
          name="name"
          type="password"
          value={formik.values.name}
          onChange={formik.handleChange}
          isTouched={formik.touched.name}
          error={formik.errors.name}
        />
        <label htmlFor="surname">{content.surname}</label>
        <Input
          id="surname"
          name="surname"
          type="password"
          value={formik.values.surname}
          onChange={formik.handleChange}
          isTouched={formik.touched.surname}
          error={formik.errors.surname}
        />
        <label htmlFor="company">{content.company}</label>
        <Input
          id="company"
          name="company"
          type="password"
          value={formik.values.company}
          onChange={formik.handleChange}
          isTouched={formik.touched.company}
          error={formik.errors.company}
        />
        <Button type="submit">{content.submit}</Button>
      </Form>
      <S.CancelButton secondary onClick={close}>
        Cancel
      </S.CancelButton>
    </Modal>
  );
};

export default UserDataForm;
