import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

import { AsidePanel as Panel } from "@common";

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
  }
`;