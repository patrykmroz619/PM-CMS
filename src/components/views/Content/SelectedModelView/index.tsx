import React from "react";
import { Redirect, Route } from "react-router-dom";

import routes from "@routes";

import FieldsView from "./FieldsView";
import RecordsView from "./RecordsView";
import * as S from "./styled";
import ViewSwitcher from "./ViewSwitcher";

type SelectedModelViewProps = {
  model: ContentModel;
};

const SelectedModelView = ({ model }: SelectedModelViewProps) => {
  return (
    <S.Wrapper>
      <S.HeadContainer>
        <S.ModelName>{model.name}</S.ModelName>
        <ViewSwitcher />
      </S.HeadContainer>
      <Route exact path={routes.records}>
        <RecordsView model={model} />
      </Route>
      <Route exact path={routes.modelFields}>
        <FieldsView model={model} />
      </Route>
      <Route exact path={routes.content}>
        <Redirect to={routes.records} />
      </Route>
    </S.Wrapper>
  );
};

export default SelectedModelView;
