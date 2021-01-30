import React from "react";
import { Redirect, useParams } from "react-router-dom";

import routes from "@routes";
import { singleRecordPage as content } from "@content";
import { useConfirmationModalHandler } from "@hooks";
import { useRecordViewData } from "./useRecordViewData";
import { useDeleteRecordHandling } from "./useDeleteRecordHandling";

import RecordDataList from "./RecordDataList";
import { ConfirmationModal, Spinner } from "@common";
import * as S from "./styled";

const SingleRecordView = () => {
  const { id } = useParams<{ id: string }>();

  const [record, model] = useRecordViewData(id);

  const [pending, handleDelete] = useDeleteRecordHandling(id);

  const [
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete
  ] = useConfirmationModalHandler(handleDelete);

  if (!record || !model) return <Redirect to={routes.records} />;
  if (pending) return <Spinner />;

  return (
    <S.Wrapper>
      <S.ContentName>{model.name}</S.ContentName>
      <RecordDataList record={record} fields={model.fields} />
      <S.ButtonsWrapper>
        <S.UpdateButton>{content.updateRecordButton}</S.UpdateButton>
        <S.DeleteButton onClick={openDeleteModal}>{content.deleteRecordButton}</S.DeleteButton>
      </S.ButtonsWrapper>
      <ConfirmationModal
        message={content.deleteMessage}
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onClose={closeDeleteModal}
      />
    </S.Wrapper>
  );
};

export default SingleRecordView;
