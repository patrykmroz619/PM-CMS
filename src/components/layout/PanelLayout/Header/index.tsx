import React from "react";

import Logo from "@assets/logo-dark.svg";
import * as S from "./styled";

const Header = () => (
  <S.Header>
    <S.HeadingsBox>
      <S.Heading>Primary header</S.Heading>
      <S.Separator />
      <S.SecondaryHeading>secondary header</S.SecondaryHeading>
    </S.HeadingsBox>
    <Logo />
  </S.Header>
);

export default Header;
