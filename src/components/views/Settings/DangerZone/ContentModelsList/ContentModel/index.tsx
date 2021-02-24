import React from "react";

import { settingsPage as content } from "@content";
import useDeletingContentModel from "./useDeletingContentModel";

import BinIcon from "@assets/bin.svg";
import * as S from "./styled";
import { ErrorBox } from "@common";

type ContentModelProps = {
  name: string;
  id: string;
};

const ContentModel = ({ name, id }: ContentModelProps) => {
  const [pending, error, handleDelete] = useDeletingContentModel();

  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <>
      <S.Item>
        <S.ModelName>{name}</S.ModelName>
        <S.Btn onClick={handleClick} danger disabled={pending}>
          {pending ? "deleting..." : content.deleteModelBtn}
        </S.Btn>
        <S.Bin onClick={handleClick}>
          <BinIcon />
        </S.Bin>
      </S.Item>
      {error && <ErrorBox>{content.deleteModelError}</ErrorBox>}
    </>
  );
};

export default ContentModel;
