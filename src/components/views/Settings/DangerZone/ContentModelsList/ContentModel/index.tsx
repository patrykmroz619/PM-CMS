import React from "react";

import { settingsPage as content } from "@content";

import BinIcon from "@assets/bin.svg";
import * as S from "./styled";

type ContentModelProps = {
  name: string;
  id: string;
};

const ContentModel = ({ name }: ContentModelProps) => {
  return (
    <S.Item>
      <S.ModelName>{name}</S.ModelName>
      <S.Btn danger>{content.deleteModelBtn}</S.Btn>
      <S.Bin>
        <BinIcon />
      </S.Bin>
    </S.Item>
  );
};

export default ContentModel;
