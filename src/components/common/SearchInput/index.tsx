import React, { useRef } from "react";
import styled from "@myStyled";

import Icon from "@assets/search.svg";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  width: 100%;
  max-width: 400px;
  height: ${({ theme }) => theme.sizing.inputsHeight};

  input {
    padding-left: ${({ theme }) => theme.spacing.m};
    padding-right: 60px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.light};
    background-color: ${({ theme }) => theme.color.primaryLight};
    border: none;
  }
  svg {
    position: absolute;
    top: 20px;
    width: 22px;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inputRef.current?.focus();

  return (
    <Wrapper className={className}>
      <input ref={inputRef} {...props} data-testid="input" />
      <Icon onClick={handleClick} />
    </Wrapper>
  );
};
