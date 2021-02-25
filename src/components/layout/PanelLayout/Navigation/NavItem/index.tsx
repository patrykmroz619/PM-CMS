import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styled";

type NavItemProps = {
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  exact?: boolean;
  disabled?: boolean;
};

const NavItem = ({ to, icon: Icon, exact, disabled }: NavItemProps) => {
  return (
    <S.NavItem disabled={Boolean(disabled)}>
      <NavLink to={to} exact={exact} activeClassName="active">
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
      </NavLink>
    </S.NavItem>
  );
};

export default NavItem;
