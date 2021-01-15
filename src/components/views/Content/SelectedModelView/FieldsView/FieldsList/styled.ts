import { css } from "styled-components";
import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const FieldList = styled.ul`
  ${({ theme }) => {
    const { sizing } = theme;

    return css`
      height: calc(
        100vh - ${sizing.header.mobile} - ${sizing.navigation.mobile} - ${sizing.inputsHeight} -
          (${theme.spacing.s} * 3) - 77px
      );
    `;
  }}
  overflow: auto;

  ${media(breakpoints.tablet.s)} {
    height: calc(100vh - 270px);
  }

  ${media(breakpoints.tablet.l)} {
    height: calc(100vh - 300px);
  }

  ${media(breakpoints.tablet.xl)} {
    height: calc(100vh - 310px);
  }
`;
