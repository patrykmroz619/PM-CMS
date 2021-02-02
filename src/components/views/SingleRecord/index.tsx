import React, { useCallback, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import routes from "@routes";
import { singleRecordPage as content } from "@content";
import { useConfirmationModalHandler } from "@hooks";
import { useRecordViewData } from "./useRecordViewData";
import { useDeleteRecordHandling } from "./useDeleteRecordHandling";

import RecordDataList from "./RecordDataList";
import { ConfirmationModal, Spinner } from "@common";
import * as S from "./styled";
import UpdateRecordAsidePanel from "./UpdateRecordAsidePanel";

const SingleRecordView = () => {
  const [isPanelVisible, setPanelVisibility] = useState(false);

  const handlePanelClose = useCallback(() => setPanelVisibility(false), []);
  const handlePanelOpen = useCallback(() => setPanelVisibility(true), []);

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
        <S.Button onClick={handlePanelOpen}>{content.updateRecordButton}</S.Button>
        <S.Button danger onClick={openDeleteModal}>
          {content.deleteRecordButton}
        </S.Button>
      </S.ButtonsWrapper>
      <UpdateRecordAsidePanel
        visible={isPanelVisible}
        close={handlePanelClose}
        fields={model.fields}
        record={record}
      />
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
