import React from "react";
import { Redirect, Route } from "react-router-dom";

import routes from "@routes";

import FieldsView from "./FieldsView";
import RecordsView from "./RecordsView";
import * as S from "./styled";

type SelectedModelViewProps = {
  model: ContentModel;
};

const SelectedModelView = ({ model }: SelectedModelViewProps) => {
  return (
    <S.Wrapper>
      <h3>{model.name}</h3>
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
