import React from "react";
import { Redirect, useParams } from "react-router-dom";

import routes from "@routes";
import { singleRecordPage as content } from "@content";
import { useRecordViewData } from "./useRecordViewData";

import RecordDataList from "./RecordDataList";
import * as S from "./styled";

const SingleRecordView = () => {
  const { id } = useParams<{ id: string }>();

  const [record, model] = useRecordViewData(id);

  if (!record || !model) return <Redirect to={routes.records} />;

  return (
    <S.Wrapper>
      <S.ContentName>{model.name}</S.ContentName>
      <RecordDataList record={record} fields={model.fields} />
      <S.ButtonsWrapper>
        <S.UpdateButton>{content.updateRecordButton}</S.UpdateButton>
        <S.DeleteButton>{content.deleteRecordButton}</S.DeleteButton>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default SingleRecordView;
