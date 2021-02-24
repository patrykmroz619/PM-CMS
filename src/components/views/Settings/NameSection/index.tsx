import React from "react";

import { settingsPage as content } from "@content";
import * as S from "./styled";
import NameInput from "./NameInput";

const NameSection = () => {
  return (
    <S.Section>
      <S.Heading>{content.name}</S.Heading>
      <NameInput />
    </S.Section>
  );
};

export default NameSection;
