import React from "react";
import { keyframes } from "styled-components";

import styled from "@myStyled";

type SpinnerProps = {
  className?: string;
};

const spin = keyframes`
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid transparent;
  border-left: 8px solid ${({ theme }) => theme.color.dark};
  border-right: 8px solid ${({ theme }) => theme.color.dark};
  border-radius: 50px;
  transform-origin: left top;
  animation: ${spin} 2s linear infinite;
`;

const Outher = styled(Circle)`
  width: 100%;
  height: 100%;
`;

const Inner = styled(Circle)`
  width: 75%;
  height: 75%;
  animation-direction: reverse;
`;

export const Spinner = ({ className }: SpinnerProps) => (
  <Wrapper data-testid="spinner" className={className}>
    <Outher />
    <Inner />
  </Wrapper>
);
