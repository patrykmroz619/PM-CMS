import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const TableWrapper = styled.div`
  tr {
    display: flex;
  }

  th:first-child,
  td:first-child {
    display: block;
    flex-grow: 1;
  }

  th:last-child,
  td:last-child {
    display: block;
    max-width: 120px !important;
    margin-right: 0;
    margin-left: auto;
    text-align: right;
  }

  ${media(breakpoints.tablet.m)} {
    flex-basis: 100%;
    th:first-child,
    td:first-child {
      padding-left: 50px;
      text-align: left;
    }
  }

  ${media(breakpoints.tablet.xl)} {
    th:first-child,
    td:first-child {
      padding-left: 50px;
      text-align: left;
    }

    th:last-child,
    td:last-child {
      padding-right: 50px;
      max-width: 170px !important;
    }
  }

  ${media(breakpoints.descop.s)} {
    height: calc(100vh - 365px);
  }
`;
