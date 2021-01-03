import React from "react";

import routes from "@routes";
import { ContentModelsMenuProps } from "../index";
import MenuItem from "./MenuItem";
import ArrowIcon from "@assets/arrow.svg";

import * as S from "./styled";

type MenuProps = ContentModelsMenuProps & {
  selectModel: (id: string) => void;
  isOpen: boolean;
  toogleMenu: () => void;
};

const Menu = ({ contentModels, selectedModelId, selectModel, isOpen, toogleMenu }: MenuProps) => (
  <S.Menu isOpen={isOpen}>
    <S.MenuList>
      {contentModels.map((model) => (
        <MenuItem
          key={model.id}
          modelData={model}
          isActive={model.id === selectedModelId}
          handleClick={() => selectModel(model.id)}
        />
      ))}
    </S.MenuList>
    <S.Btn to={routes.newContentModel}>+ new model</S.Btn>
    <S.Toggler isOpen={isOpen} onClick={toogleMenu}>
      <ArrowIcon />
    </S.Toggler>
  </S.Menu>
);

export default Menu;
