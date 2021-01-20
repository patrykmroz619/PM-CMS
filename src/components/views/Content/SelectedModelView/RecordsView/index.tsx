import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { contentModelsPage as content } from "@content";
import routes from "@routes";
import { useRecordsFetching } from "./useRecordsFetching";

import RecordsTable from "./RecordsTable";
import * as S from "./styled";
import { Spinner } from "@common";

type RecordsViewProps = {
  model: ContentModel;
};

const RecordsView = ({ model }: RecordsViewProps) => {
  const [activePreview, setActivePreview] = useState(model.fields[0]?.name);

  useEffect(() => {
    setActivePreview(model.fields[0]?.name);
  }, [model.id]);

  const pending = useRecordsFetching(model);

  if (pending) return <Spinner />;

  if (model.fields.length === 0) {
    return <Redirect to={routes.modelFields} />;
  }

  const fieldNames = model.fields.map((field) => field.name);

  const handleDropDownChange = (value: string) => setActivePreview(value);

  return (
    <S.ViewWrapper>
      <S.Search placeholder="SEARCH..." />
      <S.StyledDropDown values={fieldNames} handleChange={handleDropDownChange} />
      {activePreview && model.records && (
        <RecordsTable preview={activePreview} records={model.records} />
      )}
      <S.AddButton>{content.addRecordButton}</S.AddButton>
    </S.ViewWrapper>
  );
};

export default RecordsView;
