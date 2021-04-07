import { css } from "styled-components";
import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const FieldList = styled.ul`
  ${({ theme }) => {
    const { sizing } = theme;

    return css`
      height: calc(
        var(--viewportHeight) - ${sizing.header.mobile} - ${sizing.navigation.mobile} -
          ${sizing.inputsHeight} - (${theme.spacing.s} * 3) - 77px
      );
    `;
  }}
  overflow: auto;

  ${media(breakpoints.tablet.s)} {
    height: calc(var(--viewportHeight) - 270px);
  }

  ${media(breakpoints.tablet.l)} {
    height: calc(var(--viewportHeight) - 300px);
  }

  ${media(breakpoints.tablet.xl)} {
    height: calc(var(--viewportHeight) - 310px);
  }
`;
