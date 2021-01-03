import React from "react";

import routes from "@routes";
import { ContentModelsMenuProps } from "../index";
import DescopMenuItem from "./DescopMenuItem";

import * as S from "./styled";

type DescopMenuProps = ContentModelsMenuProps & { selectModel: (id: string) => void };

const DescopMenu = ({ contentModels, selectedModelId, selectModel }: DescopMenuProps) => (
  <S.Menu>
    <S.MenuList>
      {contentModels.map((model) => (
        <DescopMenuItem
          key={model.id}
          modelData={model}
          isActive={model.id === selectedModelId}
          handleClick={() => selectModel(model.id)}
        />
      ))}
    </S.MenuList>
    <S.Btn to={routes.newContentModel}>+ new model</S.Btn>
  </S.Menu>
);

export default DescopMenu;
