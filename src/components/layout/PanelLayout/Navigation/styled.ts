import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

export const Navigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing.s};
  height: ${({ theme }) => theme.sizing.navigation.mobile};
  background-color: ${({ theme }) => theme.color.primary};

  .active li {
    border: 2px solid black;
    background-color: ${({ theme }) => theme.color.secondary};
  }

  ${media(breakpoints.descop.s)} {
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: auto;
    width: ${({ theme }) => theme.sizing.navigation.descop};
    height: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 450px;

  ${media(breakpoints.descop.s)} {
    flex-direction: column;
    height: 400px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.s};
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: 0.3s;

  &:last-child {
    margin-right: 0;
  }

  ${media(breakpoints.descop.s)} {
    width: 46px;
    height: 46px;
  }

  svg {
    width: 80%;
  }
`;
