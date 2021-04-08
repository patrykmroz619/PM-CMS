import React from "react";

import ContentModelsIcon from "@assets/content-models.svg";
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
        <NavItem to={routes.projects} exact icon={ListIcon} title="Projects" />
        <NavItem
          to={routes.content}
          icon={ContentModelsIcon}
          title="Content models"
          disabled={!isCurrentProjectSelected}
        />
        <NavItem to={routes.profile} icon={UserIcon} title="Profile" />
        <NavItem
          to={routes.settings}
          icon={GearsIcon}
          title="Settings"
          disabled={!isCurrentProjectSelected}
        />
        <NavItem to={routes.logout} icon={LogoutIcon} title="Logout" />
      </S.NavList>
    </S.Navigation>
  );
};

export default Navigation;
