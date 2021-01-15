import { Button } from "@common";
import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const AddFieldBtn = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  ${media(breakpoints.tablet.s)} {
    width: 250px;
  }
`;
