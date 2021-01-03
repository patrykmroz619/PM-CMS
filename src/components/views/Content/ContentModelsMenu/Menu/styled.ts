import styled from "@myStyled";

import { Button } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Menu = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 225px;
  padding-bottom: calc(${({ theme }) => theme.spacing.s} * 2 + 35px);
  background-color: white;
  border-left: 1px solid ${({ theme }) => theme.color.tertiary};
  border-right: 1px solid ${({ theme }) => theme.color.tertiary};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0px)" : "translateX(-100%)")};
  transition: 0.3s;

  ${media(breakpoints.tablet.xl)} {
    transform: translateX(0px);
  }
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Btn = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing.s};
  transform: translateX(-50%);
  width: 200px;
  height: 35px;
  line-height: 35px;
`;

export const Toggler = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
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
