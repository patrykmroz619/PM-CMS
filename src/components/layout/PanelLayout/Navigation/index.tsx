import React from "react";
import { NavLink } from "react-router-dom";

import ContentModelsIcon from "@assets/content-models.svg";
import MediaIcon from "@assets/media.svg";
import ListIcon from "@assets/list.svg";
import GearsIcon from "@assets/gears.svg";
import UserIcon from "@assets/user.svg";
import LogoutIcon from "@assets/exit.svg";
import routes from "@routes";

import * as S from "./styled";

const Navigation = () => {
  return (
    <S.Navigation>
      <S.NavList>
        <NavLink to={routes.projects} exact activeClassName="active">
          <S.NavItem>
            <ListIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to={routes.content} activeClassName="active">
          <S.NavItem>
            <ContentModelsIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to={routes.media} activeClassName="active">
          <S.NavItem>
            <MediaIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to={routes.profile} activeClassName="active">
          <S.NavItem>
            <UserIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to={routes.settings} activeClassName="active">
          <S.NavItem>
            <GearsIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to={routes.logout} activeClassName="active">
          <S.NavItem>
            <LogoutIcon />
          </S.NavItem>
        </NavLink>
      </S.NavList>
    </S.Navigation>
  );
};

export default Navigation;
