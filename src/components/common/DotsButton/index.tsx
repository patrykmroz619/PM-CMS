import React from "react";

import styled from "@myStyled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
`;

const Dot = styled.div`
  margin: 1px;
  width: 9px;
  height: 9px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary};
`;

const DotsButton = ({ ...props }: ButtonProps) => (
  <Button {...props}>
    <Dot />
    <Dot />
    <Dot />
  </Button>
);

export { DotsButton };
