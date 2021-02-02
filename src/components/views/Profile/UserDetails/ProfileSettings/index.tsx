import React from "react";

import { profilePage as content } from "@content";
import { useConfirmationModalHandler } from "@hooks";
import { useDeleteUser } from "./useDeleteUser";
import { useModalFormHandler } from "./useModalFormHandler";

import { ConfirmationModal, Spinner } from "@common";
import * as S from "./styled";
import PasswordForm from "./PasswordForm";
import UserDataForm from "./UserDataForm";

const ProfileSettings = () => {
  const [isPasswordFormOpen, openPasswordForm, closePasswordForm] = useModalFormHandler();
  const [isUserDataFormOpen, openUserDataForm, closeUserDataForm] = useModalFormHandler();

  const [deletePending, handleDelete] = useDeleteUser();

  const [
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirm
  ] = useConfirmationModalHandler(handleDelete);

  if (deletePending) {
    return <Spinner />;
  }

  return (
    <>
      <S.ButtonsWrapper>
        <S.Button onClick={openPasswordForm}>{content.passwordButton}</S.Button>
        <S.Button onClick={openUserDataForm}>{content.updateDataButton}</S.Button>
        <S.Button danger onClick={openDeleteModal}>
          {content.deleteAccountButton}
        </S.Button>
      </S.ButtonsWrapper>
      <PasswordForm isOpen={isPasswordFormOpen} close={closePasswordForm} />
      <UserDataForm isOpen={isUserDataFormOpen} close={closeUserDataForm} />
      <ConfirmationModal
        message={content.deleteMessage}
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirm}
      />
    </>
  );
};

export default ProfileSettings;
