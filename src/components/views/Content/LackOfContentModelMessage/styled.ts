import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

import { Button, P } from "@common";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  max-width: 450px;
  text-align: center;

  svg {
    width: 100px;
    height: 100px;
  }
`;

export const Message = styled(P)`
  text-align: center;
  font-weight: 700;

  ${media(breakpoints.tablet.xl)} {
    font-size: 18px;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Btn = styled(Button)`
  display: block;
  max-width: 300px;
  margin: auto;
`;
