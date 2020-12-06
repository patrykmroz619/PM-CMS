import styled from "@myStyled";

import media, { breakpoints } from "@mediaQuery";

export const Header = styled.header`
  display: flex;
  padding: ${({ theme }) => theme.spacing.s};
  height: ${({ theme }) => theme.sizing.header.mobile};
  border-left: 1px solid ${({ theme }) => theme.color.tertiary};
  border-bottom: 1px solid ${({ theme }) => theme.color.tertiary};
  text-transform: uppercase;

  ${media(breakpoints.tablet.s)} {
    height: ${({ theme }) => theme.sizing.header.descop};
  }

  ${media(breakpoints.descop.s)} {
    margin-left: ${({ theme }) => theme.sizing.navigation.descop};
    padding-left: ${({ theme }) => theme.spacing.m};
    padding-right: ${({ theme }) => theme.spacing.m};
  }

  svg {
    flex-shrink: 0;
    flex-grow: 1;
    margin-left: ${({ theme }) => theme.spacing.s};
  }
`;

export const HeadingsBox = styled.div`
  width: calc(100% - 65px);

  ${media(breakpoints.tablet.s)} {
    width: calc(100% - 80px);
  }

  ${media(breakpoints.descop.s)} {
    display: flex;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: 20px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media(breakpoints.tablet.s)} {
    font-size: 24px;
  }

  ${media(breakpoints.descop.s)} {
    display: inline-block;
    width: auto;
    max-width: 800px;
  }
`;

export const SubHeading = styled.h2`
  font-size: 16px;
  line-height: 1.6;

  ${media(breakpoints.tablet.s)} {
    font-size: 18px;
  }

  ${media(breakpoints.descop.s)} {
    display: inline-block;
  }
`;

export const Separator = styled.div`
  width: 75%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.tertiary};

  ${media(breakpoints.descop.s)} {
    display: inline-block;
    margin-left: ${({ theme }) => theme.spacing.m};
    margin-right: ${({ theme }) => theme.spacing.m};
    width: 2px;
    height: 18px;
  }
`;
