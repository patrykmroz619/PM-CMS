import styled from "@myStyled";

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primaryLight};
  width: 250px;

  svg {
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%) rotate(90deg);
    width: 15px;
    cursor: pointer;
  }
`;

export const Toggler = styled.button`
  padding: 0px 60px 0px ${({ theme }) => theme.spacing.m};
  height: ${({ theme }) => theme.sizing.inputsHeight};
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
  outline: none;
`;

export const Menu = styled.ul`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.color.primary}; ;
`;

export const Option = styled.li<{ selected: boolean }>`
  padding: 0px ${({ theme }) => theme.spacing.m};
  height: 35px;
  line-height: 35px;
  background-color: ${({ theme, selected }) => (selected ? theme.color.primary : "white")};
  transition: 0.3s;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
`;
