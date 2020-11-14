import React from "react";
import styled from "@myStyled";
import { Link } from "react-router-dom";

type ButtonProps = {
  secondary?: boolean;
  disabled?: boolean;
  width?: string;
  inline?: boolean;
  to?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactText;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Btn = styled.a<ButtonProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ theme }) => theme.sizing.inputsHeight};
  font-size: ${({ theme }) => theme.fontSize.p};
  line-height: ${({ theme }) => theme.sizing.inputsHeight};
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.color.secondaryHover : theme.color.primaryHover};
  }
`;

const InlineBtn = styled.a<ButtonProps>`
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.p};
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
  border: none;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primaryHover};
    text-decoration: underline;
  }
`;

export const Button: React.FC<ButtonProps> = ({ inline, to, children, ...props }) => {
  const Component = inline ? InlineBtn : Btn;

  return to ? (
    <Link component={Component} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <Component as="button" {...props}>
      {children}
    </Component>
  );
};
