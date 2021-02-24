import React from "react";

import { settingsPage as content } from "@content";
import ContentModelsList from "./ContentModelsList";

import * as S from "./styled";
import DeleteProjectSection from "./DeleteProjectSection";

const DangerZone = () => {
  return (
    <S.Wrapper>
      <S.Heading>{content.dangerZone}</S.Heading>
      <S.Separator />
      <ContentModelsList />
      <S.Separator />
      <DeleteProjectSection />
    </S.Wrapper>
  );
};

export default DangerZone;
