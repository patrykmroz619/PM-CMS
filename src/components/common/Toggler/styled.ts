import styled from "@myStyled";

export const SwitchWrapper = styled.div<{ active: boolean; pending: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  padding: 4px;
  background-color: ${({ active, theme }) => (active ? theme.color.primary : "#bbb")};
  transition: 0.5s;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Switch = styled.span<{ active: boolean; pending: boolean }>`
  display: block;
  height: 42px;
  width: 42px;
  border-radius: 40px;
  background-color: white;
  transform: translateX(${({ active, pending }) => (pending ? "25px" : active ? "50px" : "0px")});
  transition: 0.5s;
`;
