import React from "react";

import Icon from "@assets/profile.svg";
import * as S from "./styled";
import UserDataItem from "./UserDataItem";
import ProfileSettings from "./ProfileSettings";

type UserDetailsProps = {
  userData: UserData;
};

const UserDetails = ({ userData }: UserDetailsProps) => {
  return (
    <S.Section>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>
      <ul>
        <UserDataItem itemName="Email address" itemValue={userData.email} />
        <UserDataItem itemName="Name" itemValue={userData.name} />
        <UserDataItem itemName="Surname" itemValue={userData.surname} />
        <UserDataItem itemName="Company" itemValue={userData.company} />
      </ul>
      <ProfileSettings />
    </S.Section>
  );
};

export default UserDetails;
