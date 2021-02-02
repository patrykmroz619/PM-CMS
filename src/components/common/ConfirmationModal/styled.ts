import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";
import { Button as Btn } from "../Button";
import { P } from "../Paragraph";

export const Message = styled(P)`
  flex-basis: 100%;
  text-align: center;
`;

export const Button = styled(Btn)`
  margin-top: ${({ theme }) => theme.spacing.m};

  ${media(breakpoints.mobile.xl)} {
    max-width: 150px;
  }
`;
