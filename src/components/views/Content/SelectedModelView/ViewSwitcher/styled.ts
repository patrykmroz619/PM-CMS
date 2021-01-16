import media, { breakpoints } from "@mediaQuery";
import styled from "@myStyled";

export const Switcher = styled.div`
  margin: 5px 0 ${({ theme }) => theme.spacing.s} 0;
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: 2px solid black;
  overflow: hidden;

  ${media(breakpoints.tablet.s)} {
    width: 300px;
    align-self: center;
    margin-right: ${({ theme }) => theme.spacing.m};
  }

  a {
    display: block;
    width: 50%;
  }

  a:nth-child(1) {
    border-right: 1px solid black;
  }

  a:nth-child(2) {
    border-left: 1px solid black;
  }
`;

export const SwitcherText = styled.p<{ isActive: boolean }>`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.primary : "white")};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isActive }) => (!isActive ? theme.color.primaryHover : "none")};
  }
`;
