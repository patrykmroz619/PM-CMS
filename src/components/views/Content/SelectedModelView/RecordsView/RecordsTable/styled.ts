import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const TableWrapper = styled.div`
  ${media(breakpoints.tablet.m)} {
    flex-basis: 100%;
  }

  ${media(breakpoints.tablet.xl)} {
    th:first-child,
    td:first-child {
      padding-left: 50px;
      text-align: left;
    }
  }

  ${media(breakpoints.descop.s)} {
    height: calc(100vh - 365px);
  }
`;
