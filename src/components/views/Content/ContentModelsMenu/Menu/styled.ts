import styled from "@myStyled";

import { Button } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1;
  top: ${({ theme }) => theme.sizing.header.mobile};
  left: 0;
  width: 240px;
  bottom: ${({ theme }) => theme.sizing.navigation.mobile};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0px)" : "translateX(-225px)")};
  transition: 0.3s;

  ${media(breakpoints.tablet.s)} {
    top: ${({ theme }) => theme.sizing.header.descop};
    transform: translateX(0px);
  }

  ${media(breakpoints.descop.s)} {
    left: ${({ theme }) => theme.sizing.navigation.descop};
    bottom: 0;
  }
`;

export const Menu = styled.aside`
  width: 225px;
  height: 100%;
  padding-bottom: calc(${({ theme }) => theme.spacing.s} * 2 + 35px);
  background-color: white;
  border-left: 1px solid ${({ theme }) => theme.color.tertiary};
  border-right: 1px solid ${({ theme }) => theme.color.tertiary};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  transition: 0.3s;
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Btn = styled(Button)`
  position: absolute;
  left: calc(225px / 2);
  bottom: ${({ theme }) => theme.spacing.s};
  transform: translateX(-50%);
  width: 200px;
  height: 35px;
  line-height: 35px;
`;

export const Toggler = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(100%, -50%);
  width: ${({ theme }) => theme.spacing.m};
  height: 70px;
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.tertiary};
  border-left: none;
  border-radius: 0px 20px 20px 0px;

  svg {
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    width: 12px;
    height: 12px;
    transition: 0.5s;
    transform: ${({ isOpen }) => (isOpen ? "rotateY(180deg)" : "rotateY(0deg)")};
  }

  ${media(breakpoints.tablet.xl)} {
    display: none;
  }
`;
