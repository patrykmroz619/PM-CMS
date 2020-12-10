import React from "react";

import { footer } from "@content";
import * as S from "./styled";

type ContentWrapperProps = {
  children: React.ReactChild;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  );
};

export default ContentWrapper;
