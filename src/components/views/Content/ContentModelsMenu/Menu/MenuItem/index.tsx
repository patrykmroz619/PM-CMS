import React from "react";

import * as S from "./styled";

type MenuItemProps = {
  modelData: Pick<ContentModel, "id" | "name" | "endpoint">;
  isActive: boolean;
  handleClick: () => void;
};

const MenuItem = ({ modelData, isActive, handleClick }: MenuItemProps) => (
  <S.MenuItem onClick={handleClick} active={isActive}>
    <S.ModelName>{modelData.name}</S.ModelName>
    <S.ModelEndpoint>{modelData.endpoint}</S.ModelEndpoint>
  </S.MenuItem>
);

export default MenuItem;
