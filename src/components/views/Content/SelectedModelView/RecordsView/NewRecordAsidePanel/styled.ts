import styled from "@myStyled";

import { AsidePanel as Panel } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const AsidePanel = styled(Panel)`
  position: fixed;
  top: ${({ theme }) => theme.sizing.header.mobile};
  bottom: ${({ theme }) => theme.sizing.navigation.mobile};
  z-index: 0;

  ${media(breakpoints.tablet.s)} {
    top: ${({ theme }) => theme.sizing.header.descop};
  }

  ${media(breakpoints.tablet.m)} {
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;
