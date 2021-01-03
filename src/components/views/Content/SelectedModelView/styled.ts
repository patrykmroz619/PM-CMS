import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const Wrapper = styled.div`
  ${media(breakpoints.tablet.xl)} {
    margin-left: 225px;
  }
`;
