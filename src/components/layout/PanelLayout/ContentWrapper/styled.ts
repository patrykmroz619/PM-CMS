import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  height: calc(
    var(--viewportHeight) -
      (
        ${({ theme }) => theme.sizing.header.mobile} +
          ${({ theme }) => theme.sizing.navigation.mobile}
      )
  );
  background-color: ${({ theme }) => theme.color.light};
  box-shadow: inset ${({ theme }) => theme.shadow.primary};
  overflow-y: auto;
  overflow-x: hidden;

  ${media(breakpoints.tablet.s)} {
    padding: ${({ theme }) => theme.spacing.l};
    height: calc(
      var(--viewportHeight) -
        (
          ${({ theme }) => theme.sizing.header.descop} +
            ${({ theme }) => theme.sizing.navigation.mobile}
        )
    );
  }

  ${media(breakpoints.descop.s)} {
    margin-left: 70px;
    padding: ${({ theme }) => theme.spacing.xxl};
    padding-bottom: ${({ theme }) => theme.spacing.m};
    height: calc(var(--viewportHeight) - ${({ theme }) => theme.sizing.header.descop});
  }
`;

export const Content = styled.div`
  flex-basis: 100%;
  width: 100%;
  ${media(breakpoints.descop.s)} {
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
`;

export const Footer = styled.footer`
  display: none;
  ${media(breakpoints.descop.s)} {
    display: block;
    flex-shrink: 0;
    font-size: 12px;
  }
`;
