import React from "react";
import styled from "@myStyled";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  secondary?: boolean;
  width?: string;
  to?: string;
  inline?: boolean;
  children: React.ReactText;
}

const Btn = styled.span<ButtonProps>`
  display: block;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ theme }) => theme.sizing.inputsHeight};
  font-size: ${({ theme }) => theme.fontSize.p};
  font-weight: 700;
  line-height: ${({ theme }) => theme.sizing.inputsHeight};
  color: ${({ theme }) => theme.color.dark};
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.color.secondaryHover : theme.color.primaryHover};
  }
`;

const InlineBtn = styled.span<ButtonProps>`
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

export const Button: React.FC<ButtonProps> = React.memo(
  ({ inline, width, secondary, to, children, ...props }) => {
    const Component = inline ? InlineBtn : Btn;

    return to ? (
      <Link to={to} {...props}>
        <Component width={width} secondary={secondary}>
          {children}
        </Component>
      </Link>
    ) : (
      <Component as="button" width={width} secondary={secondary} {...props}>
        {children}
      </Component>
    );
  }
);
