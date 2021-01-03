import React from "react";
import styled from "@myStyled";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  secondary?: boolean;
  to?: string;
  inline?: boolean;
  children: React.ReactText;
}

const Btn = styled.span<ButtonProps>`
  display: block;
  width: 100%;
  height: ${({ theme }) => theme.sizing.inputsHeight};
  font-size: ${({ theme }) => theme.fontSize.p};
  font-weight: 700;
  line-height: ${({ theme }) => theme.sizing.inputsHeight};
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
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
  ({ inline, secondary, className, to, children, ...props }) => {
    const Component = inline ? InlineBtn : Btn;

    return to ? (
      <Link to={to} {...props}>
        <Component className={className} secondary={secondary}>
          {children}
        </Component>
      </Link>
    ) : (
      <Component as="button" secondary={secondary} className={className} {...props}>
        {children}
      </Component>
    );
  }
);
