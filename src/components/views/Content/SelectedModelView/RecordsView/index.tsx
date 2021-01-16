import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import routes from "@routes";
import { useRecordsFetching } from "./useRecordsFetching";

import RecordsTable from "./RecordsTable";
import * as S from "./styled";

type RecordsViewProps = {
  model: ContentModel;
};

const RecordsView = ({ model }: RecordsViewProps) => {
  const [activePreview, setActivePreview] = useState(model.fields[0].name || undefined);

  useRecordsFetching(model);

  if (model.fields.length === 0) {
    return <Redirect to={routes.modelFields} />;
  }

  const handleDropDownChange = (value: string) => setActivePreview(value);

  return (
    <S.ViewWrapper>
      <S.Search placeholder="SEARCH..." />
      <S.StyledDropDown
        values={["value1", "value2", "value3"]}
        defaultValue={activePreview}
        handleChange={handleDropDownChange}
      />
      {activePreview && model.records && (
        <RecordsTable preview={activePreview} records={model.records} />
      )}
      <S.AddButton>+ add record</S.AddButton>
    </S.ViewWrapper>
  );
};

export default RecordsView;
