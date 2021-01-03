import React from "react";

import routes from "@routes";
import { contentModelsPage as content } from "@content";

import DeadIcon from "@assets/dead.svg";
import * as S from "./styled";

const LackOfContentModelMessage = () => (
  <S.Wrapper>
    <DeadIcon />
    <S.Message>{content.lackOfContentModels.message}</S.Message>
    <S.Btn to={routes.newContentModel}>{content.lackOfContentModels.button}</S.Btn>
  </S.Wrapper>
);

export default LackOfContentModelMessage;
