import React, { useState } from "react";

import { P } from "@common";
import * as S from "./styled";

type UserDataProps = {
  email: string;
  password: string;
};

const UserData = React.memo(({ email, password }: UserDataProps) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  return (
    <>
      <P light>
        <S.Bold>E-mail: </S.Bold>
        {email}
      </P>
      <P light>
        <S.Bold>Password: </S.Bold>
        {isPasswordVisible ? password : "*".repeat(password.length)}
        <S.EyeButton type="button" onClick={() => setPasswordVisibility(!isPasswordVisible)}>
          <S.EyeIcon active={isPasswordVisible ? 1 : 0} />
        </S.EyeButton>
      </P>
    </>
  );
});

export default UserData;
