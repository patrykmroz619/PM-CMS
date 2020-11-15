import React, { useState } from "react";

import { P } from "@common";
import { Bold, EyeButton, EyeIcon } from "./styled";

type UserDataProps = {
  email: string;
  password: string;
};

const UserData: React.FC<UserDataProps> = ({ email, password }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  return (
    <>
      <P light>
        <Bold>E-mail: </Bold>
        {email}
      </P>
      <P light>
        <Bold>Password: </Bold>
        {isPasswordVisible ? password : "*".repeat(password.length)}
        <EyeButton type="button" onClick={() => setPasswordVisibility(!isPasswordVisible)}>
          <EyeIcon active={isPasswordVisible ? 1 : 0} />
        </EyeButton>
      </P>
    </>
  );
};

export default UserData;
