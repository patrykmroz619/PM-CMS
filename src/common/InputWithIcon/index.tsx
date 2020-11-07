import React from "react";
import styled from "@myStyled";

interface InputWithIconProps extends React.HTMLProps<HTMLInputElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  svg {
    position: absolute;
    top: 50%;
    width: 22px;
    left: 20px;
    transform: translateY(-50%);
  }
`;

export const InputWithIcon: React.FC<InputWithIconProps> = ({ icon: Icon, ...props }) => (
  <Wrapper>
    <input {...props} />
    <Icon />
  </Wrapper>
);
