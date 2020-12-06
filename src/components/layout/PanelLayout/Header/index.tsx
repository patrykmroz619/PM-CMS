import React from "react";

import Logo from "@assets/logo-dark.svg";
import * as S from "./styled";

type HeaderProps = {
  subheading: string;
};

const Header = React.memo(({ subheading }: HeaderProps) => (
  <S.Header>
    <S.HeadingsBox>
      <S.Heading>Primary header</S.Heading>
      <S.Separator />
      <S.SubHeading>{subheading}</S.SubHeading>
    </S.HeadingsBox>
    <Logo />
  </S.Header>
));

export default Header;
