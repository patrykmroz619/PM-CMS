import React from "react";
import { NavLink } from "react-router-dom";

import ContentModelsIcon from "@assets/content-models.svg";
import MediaIcon from "@assets/media.svg";
import ListIcon from "@assets/list.svg";
import GearsIcon from "@assets/gears.svg";
import UserIcon from "@assets/user.svg";
import LogoutIcon from "@assets/exit.svg";

import * as S from "./styled";

const Navigation = () => {
  return (
    <S.Navigation>
      <S.NavList>
        <NavLink to="/panel" exact activeClassName="active">
          <S.NavItem>
            <ListIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to="/panel/content" activeClassName="active">
          <S.NavItem>
            <ContentModelsIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to="/panel/media" activeClassName="active">
          <S.NavItem>
            <MediaIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to="/panel/profile" activeClassName="active">
          <S.NavItem>
            <UserIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to="/panel/settings" activeClassName="active">
          <S.NavItem>
            <GearsIcon />
          </S.NavItem>
        </NavLink>
        <NavLink to="/panel/logout" activeClassName="active">
          <S.NavItem>
            <LogoutIcon />
          </S.NavItem>
        </NavLink>
      </S.NavList>
    </S.Navigation>
  );
};

export default Navigation;
