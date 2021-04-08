import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const TableWrapper = styled.div`
  ${media(breakpoints.tablet.m)} {
    max-height: 280px;
  }

  tr {
    display: flex;
    max-width: 100%;
  }

  th:first-child,
  td:first-child {
    display: block;
    flex-grow: 1;
    max-width: calc(100% - 106px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    max-height: calc(var(--viewportHeight) - 365px);
  }
`;
