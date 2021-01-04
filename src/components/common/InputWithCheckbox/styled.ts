import styled from "@myStyled";

export const Checkbox = styled.input`
  position: relative;
  width: 1px;
  margin-left: calc(${({ theme }) => theme.spacing.s});
  margin-right: calc(${({ theme }) => theme.spacing.m});

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.color.primary};
    transition: 0.3s;
    cursor: pointer;
  }

  &:checked:before {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
