import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const Wrapper = styled.div`
  ${media(breakpoints.tablet.xl)} {
    padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};
    margin-left: 225px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media(breakpoints.tablet.s)} {
    flex-wrap: nowrap;
  }
`;

export const ModelName = styled.h3`
  flex-basis: 100%;
  margin-left: ${({ theme }) => theme.spacing.m};
  font-size: 24px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media(breakpoints.tablet.s)} {
    text-align: left;
  }

  ${media(breakpoints.tablet.l)} {
    font-size: 35px;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`;
