import React from "react";

import { ProfilePage as content } from "@content";
import * as S from "./styled";

const ProfileSettings = () => {
  return (
    <>
      <S.ButtonsWrapper>
        <S.Button>{content.passwordButton}</S.Button>
        <S.Button>{content.updateDataButton}</S.Button>
        <S.Button danger>{content.deleteAccountButton}</S.Button>
      </S.ButtonsWrapper>
    </>
  );
};

export default ProfileSettings;
