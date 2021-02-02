import React from "react";

import * as S from "./styled";

type UserDataItemProps = {
  itemName: string;
  itemValue?: string;
};

const UserDataItem = ({ itemName, itemValue }: UserDataItemProps) => (
  <S.Wrapper>
    <S.DataItemName>{itemName}</S.DataItemName>
    <S.Separator />
    <S.DataitemValue>{itemValue || "Not passed"}</S.DataitemValue>
  </S.Wrapper>
);

export default UserDataItem;
