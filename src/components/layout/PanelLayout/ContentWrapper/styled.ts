import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const Wrapper = styled.section`
  position: relative;
  min-height: calc(
    100vh -
      (
        ${({ theme }) => theme.sizing.header.mobile} +
          ${({ theme }) => theme.sizing.navigation.mobile}
      )
  );
  background-color: ${({ theme }) => theme.color.light};
  box-shadow: inset ${({ theme }) => theme.shadow.primary};

  ${media(breakpoints.tablet.s)} {
    min-height: calc(
      100vh -
        (
          ${({ theme }) => theme.sizing.header.descop} +
            ${({ theme }) => theme.sizing.navigation.mobile}
        )
    );
  }

  ${media(breakpoints.descop.s)} {
    margin-left: 70px;
    min-height: calc(100vh - ${({ theme }) => theme.sizing.header.descop});
  }
`;

export const Footer = styled.footer`
  display: none;
  ${media(breakpoints.descop.s)} {
    display: block;
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.s};
    left: 50%;
    font-size: 12px;
    transform: translateX(-50%);
  }
`;
