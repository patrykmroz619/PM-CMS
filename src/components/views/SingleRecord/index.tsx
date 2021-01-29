import React from "react";
import { Redirect, useParams } from "react-router-dom";

import routes from "@routes";
import { singleRecordPage as content } from "@content";
import { useConfirmationModalHandler } from "@hooks";
import { useRecordViewData } from "./useRecordViewData";

import RecordDataList from "./RecordDataList";
import * as S from "./styled";
import { ConfirmationModal } from "@common";

const SingleRecordView = () => {
  const { id } = useParams<{ id: string }>();

  const [record, model] = useRecordViewData(id);

  const onDeleteConfirm = () => console.log("delete");

  const [
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete
  ] = useConfirmationModalHandler(onDeleteConfirm);

  if (!record || !model) return <Redirect to={routes.records} />;

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
