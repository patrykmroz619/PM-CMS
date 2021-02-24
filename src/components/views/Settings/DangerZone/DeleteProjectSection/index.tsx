import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import routes from "@routes";
import { settingsPage as content } from "@content";
import { deleteProject } from "@api/projects";
import { currentProjectSelector } from "@selectors";
import { currentProjectActions, projectsActions } from "@actions";
import { useConfirmationModalHandler, useSubmitAndDispatch } from "@hooks";

import { ConfirmationModal, ErrorBox, Spinner } from "@common";
import * as S from "./styled";

const DeleteProjectSection = () => {
  const currentProjectId = useSelector(currentProjectSelector.id);

  const dispatch = useDispatch();
  const history = useHistory();

  const onDeleteSuccess = () => {
    if (currentProjectId) {
      dispatch(projectsActions.delete(currentProjectId));
      history.push(routes.projects);
    }
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    deleteProject,
    currentProjectActions.unsetCurrentProject,
    onDeleteSuccess
  );

  const handleDelete = () => {
    if (currentProjectId) {
      handleSubmit(currentProjectId);
    }
    close();
  };

  const [isOpen, open, close, confirm] = useConfirmationModalHandler(handleDelete);

  return (
    <S.Box>
      <S.Btn danger onClick={open}>
        {content.deleteProjectBtn}
      </S.Btn>
      <ConfirmationModal
        message={content.deleteProjectMessage}
        isOpen={isOpen}
        onClose={close}
        onConfirm={confirm}
      />
      {pending && <Spinner />}
      {error && <ErrorBox>{error}</ErrorBox>}
    </S.Box>
  );
};

export default DeleteProjectSection;
