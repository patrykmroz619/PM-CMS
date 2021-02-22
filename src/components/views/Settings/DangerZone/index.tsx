import React from "react";

import { settingsPage as content } from "@content";
import ContentModelsList from "./ContentModelsList";

import * as S from "./styled";

const DangerZone = () => {
  return (
    <S.Wrapper>
      <S.Heading>{content.dangerZone}</S.Heading>
      <S.Separator />
      <ContentModelsList />
    </S.Wrapper>
  );
};

export default DangerZone;
