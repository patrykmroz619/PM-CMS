import React from "react";

import * as S from "./styled";

type DescopMenuItemProps = {
  modelData: Pick<ContentModel, "id" | "name" | "endpoint">;
  isActive: boolean;
  handleClick: () => void;
};

const DescopMenuItem = ({ modelData, isActive, handleClick }: DescopMenuItemProps) => (
  <S.MenuItem onClick={handleClick} active={isActive}>
    <S.ModelName>{modelData.name}</S.ModelName>
    <S.ModelEndpoint>{modelData.endpoint}</S.ModelEndpoint>
  </S.MenuItem>
);

export default DescopMenuItem;
