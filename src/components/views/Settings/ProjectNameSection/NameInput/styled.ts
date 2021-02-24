import styled from "@myStyled";

import { Button, Input as BaseInput } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Form = styled.form<{ pending: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  opacity: ${({ pending }) => (pending ? 0.5 : 1)};
  pointer-events: ${({ pending }) => (pending ? "none" : "inherit")};

  ${media(breakpoints.tablet.m)} {
    flex-wrap: nowrap;
  }
`;

export const Input = styled(BaseInput)``;

export const Btn = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.m};
  max-width: 400px;
  ${media(breakpoints.tablet.m)} {
    max-width: 300px;
  }
`;
