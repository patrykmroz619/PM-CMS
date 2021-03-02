import React from "react";

import ContentModelsIcon from "@assets/content-models.svg";
import MediaIcon from "@assets/media.svg";
import ListIcon from "@assets/list.svg";
import GearsIcon from "@assets/gears.svg";
import UserIcon from "@assets/user.svg";
import LogoutIcon from "@assets/exit.svg";
import routes from "@routes";

import NavItem from "./NavItem";
import * as S from "./styled";
import { useSelector } from "react-redux";
import { currentProjectSelector } from "@selectors";

const Navigation = () => {
  const isCurrentProjectSelected = Boolean(useSelector(currentProjectSelector.id));

  return (
    <S.Navigation>
      <S.NavList>
        <NavItem to={routes.projects} exact icon={ListIcon} />
        <NavItem
          to={routes.content}
          icon={ContentModelsIcon}
          disabled={!isCurrentProjectSelected}
        />
        <NavItem to={routes.media} icon={MediaIcon} disabled={!isCurrentProjectSelected} />
        <NavItem to={routes.profile} icon={UserIcon} />
        <NavItem to={routes.settings} icon={GearsIcon} disabled={!isCurrentProjectSelected} />
        <NavItem to={routes.logout} icon={LogoutIcon} />
      </S.NavList>
    </S.Navigation>
  );
};

export default Navigation;
