import React from "react";
import { useFormik } from "formik";

import { profilePage } from "@content";
import { authValidator, setError } from "@validators";

import { Button, ErrorBox, Form, Input, Modal } from "@common";
import * as S from "./styled";
import { useSubmitChangePassword } from "./useSubmitChangePassword";

type ErrorObject = Partial<PasswordChangeFormData>;

type PasswordFormProps = {
  isOpen: boolean;
  close: () => void;
};

const { updatePasswordForm: content } = profilePage;

const initialFormValues: PasswordChangeFormData = {
  currentPassword: "",
  newPassword: "",
  passwordRepeated: ""
};

const { validatePassword, validatePasswordRepeated } = authValidator;

const PasswordForm = ({ isOpen, close }: PasswordFormProps) => {
  const [pending, error, handleSubmit] = useSubmitChangePassword(close);

  const formik = useFormik<PasswordChangeFormData>({
    initialValues: initialFormValues,
    onSubmit(values) {
      handleSubmit(values);
    },
    validate(values) {
      const errors: ErrorObject = {};

      setError(errors, "newPassword", validatePassword(values.newPassword));
      setError(
        errors,
        "passwordRepeated",
        validatePasswordRepeated(values.newPassword, values.passwordRepeated)
      );

      return errors;
    }
  });

  return (
    <Modal loading={pending} isOpen={isOpen} onClose={close}>
      <Form onSubmit={formik.handleSubmit}>
        {error && <ErrorBox>{error}</ErrorBox>}
        <label htmlFor="currentPassword">{content.currentPassword}</label>
        <Input
          id="currentPassword"
          name="currentPassword"
          type="password"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          isTouched={formik.touched.currentPassword}
          error={formik.errors.currentPassword}
        />
        <label htmlFor="newPassword">{content.newPassword}</label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          isTouched={formik.touched.newPassword}
          error={formik.errors.newPassword}
        />
        <label htmlFor="passwordRepeated">{content.repeatPassword}</label>
        <Input
          id="passwordRepeated"
          name="passwordRepeated"
          type="password"
          value={formik.values.passwordRepeated}
          onChange={formik.handleChange}
          isTouched={formik.touched.passwordRepeated}
          error={formik.errors.passwordRepeated}
        />
        <Button type="submit">{content.submit}</Button>
      </Form>
      <S.CancelButton secondary onClick={close}>
        Cancel
      </S.CancelButton>
    </Modal>
  );
};

export default PasswordForm;
