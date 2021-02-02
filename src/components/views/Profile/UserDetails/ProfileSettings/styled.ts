import styled from "@myStyled";

import { Button as Btn } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const ButtonsWrapper = styled.div`
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled(Btn)`
  margin: ${({ theme }) => theme.spacing.s};
  margin-bottom: 0;
  ${media(breakpoints.tablet.m)} {
    width: 200px;
  }
`;
