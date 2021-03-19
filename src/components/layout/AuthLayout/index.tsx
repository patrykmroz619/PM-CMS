import React from "react";
import styled from "@myStyled";

import { GradientBg } from "@common";
import { footer } from "@content";

type AuthLayoutProps = {
  children: React.ReactChild;
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.dark};
  line-height: 14px;
  font-size: 12px;
  font-weight: 700;
`;

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <GradientBg>
    <Box>{children}</Box>
    <Footer>{footer}</Footer>
  </GradientBg>
);

export { AuthLayout };
