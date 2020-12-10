import React from "react";

import Logo from "@assets/logo-dark.svg";
import * as S from "./styled";

type HeaderProps = {
  heading?: string;
  subheading?: string;
};

const Header = React.memo(({ heading, subheading }: HeaderProps) => (
  <S.Header>
    <S.HeadingsBox>
      <S.Heading>{heading}</S.Heading>
      <S.Separator />
      <S.SubHeading>{subheading}</S.SubHeading>
    </S.HeadingsBox>
    <Logo />
  </S.Header>
));

export default Header;
