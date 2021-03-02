import React from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

import { updateData } from "@api/user";
import { profilePage } from "@content";
import { useSubmitAndDispatch, useNotification } from "@hooks";
import { authValidator, setError } from "@validators";
import { userSelector } from "@selectors";
import { userActions } from "@actions";

import { Button, ErrorBox, Form, Input, Modal } from "@common";
import * as S from "./styled";

type ErrorObject = Partial<PersonalUserData>;

type PasswordFormProps = {
  isOpen: boolean;
  close: () => void;
};

const { updateUserDataForm: content } = profilePage;

const { validateName, validateSurname, validateCompanyName } = authValidator;

const UserDataForm = ({ isOpen, close }: PasswordFormProps) => {
  const userData = useSelector(userSelector.data);

  const { success } = useNotification();

  const onSuccess = () => {
    success(content.successNotification);
    close();
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    updateData,
    userActions.setUserData,
    onSuccess
  );

  const formik = useFormik<PersonalUserData>({
    initialValues: {
      name: userData?.name,
      surname: userData?.surname,
      company: userData?.company
    },
    onSubmit(values) {
      handleSubmit(values);
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
    <Modal loading={pending} isOpen={isOpen} onClose={close}>
      <Form onSubmit={formik.handleSubmit}>
        {error && <ErrorBox>{error}</ErrorBox>}
        <label htmlFor="name">{content.name}</label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          isTouched={formik.touched.name}
          error={formik.errors.name}
        />
        <label htmlFor="surname">{content.surname}</label>
        <Input
          id="surname"
          name="surname"
          type="text"
          value={formik.values.surname}
          onChange={formik.handleChange}
          isTouched={formik.touched.surname}
          error={formik.errors.surname}
        />
        <label htmlFor="company">{content.company}</label>
        <Input
          id="company"
          name="company"
          type="text"
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
