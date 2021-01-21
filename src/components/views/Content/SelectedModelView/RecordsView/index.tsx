import React, { useEffect, useMemo, useState } from "react";
import { Redirect } from "react-router-dom";

import { contentModelsPage as content } from "@content";
import routes from "@routes";
import { useRecordsFetching } from "./useRecordsFetching";
import { useAsidePanelHandler } from "./useAsidePanelHandler";

import RecordsTable from "./RecordsTable";
import * as S from "./styled";
import { Spinner } from "@common";
import NewRecordAsidePanel from "./NewRecordAsidePanel";

type RecordsViewProps = {
  model: ContentModel;
};

const RecordsView = ({ model }: RecordsViewProps) => {
  const [activePreview, setActivePreview] = useState(model.fields[0]?.name);

  useEffect(() => {
    setActivePreview(model.fields[0]?.name);
  }, [model.id]);

  const pending = useRecordsFetching(model);

  const asidePanelHandler = useAsidePanelHandler();

  const fieldNames = useMemo(() => model.fields.map((field) => field.name), [model.fields]);

  if (pending) return <Spinner />;

  if (model.fields.length === 0) {
    return <Redirect to={routes.modelFields} />;
  }

  const handleDropDownChange = (value: string) => setActivePreview(value);

  return (
    <S.ViewWrapper>
      <S.Search placeholder="SEARCH..." />
      <S.StyledDropDown values={fieldNames} handleChange={handleDropDownChange} />
      {activePreview && model.records && (
        <RecordsTable preview={activePreview} records={model.records} />
      )}
      <S.AddButton onClick={asidePanelHandler.open}>{content.addRecordButton}</S.AddButton>
      <NewRecordAsidePanel
        visible={asidePanelHandler.visible}
        close={asidePanelHandler.close}
        fields={model.fields}
      />
    </S.ViewWrapper>
  );
};

export default RecordsView;
