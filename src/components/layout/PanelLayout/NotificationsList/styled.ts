import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const Box = styled.ul`
  position: fixed;
  top: ${({ theme }) => theme.sizing.header.mobile};
  right: 0;
  padding: ${({ theme }) => theme.spacing.s};
  z-index: 2;
  max-width: 350px;
  width: 100%;

  ${media(breakpoints.tablet.m)} {
    top: auto;
    bottom: 40px;
    max-width: 375px;
  }
`;
