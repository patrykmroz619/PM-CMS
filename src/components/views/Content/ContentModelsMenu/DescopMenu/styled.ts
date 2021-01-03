import { Button } from "@common";
import styled from "@myStyled";

export const Menu = styled.aside`
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
