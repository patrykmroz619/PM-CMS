import React from "react";
import styled from "@myStyled";
import media, { breakpoints } from "@mediaQuery";

import { errorBoundaryMessage } from "@content";

import { GradientBg } from "../GradientBg";
import { P } from "../Paragraph";
import { Button } from "../Button";

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.m};
  max-width: 450px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.darkOpacity};
  border-radius: 15px;

  ${media(breakpoints.mobile.m)} {
    padding: ${({ theme }) => theme.spacing.xl};
    margin: ${({ theme }) => theme.spacing.m};
  }

  ${media(breakpoints.mobile.xl)} {
    margin: auto;
    width: 100%;
  }
`;

export const ErrorFallback = () => (
  <GradientBg>
    <Box>
      <P center light>
        {errorBoundaryMessage}
      </P>
      <a href={process.env.LANDING_PAGE_URL}>
        <Button>home page</Button>
      </a>
    </Box>
  </GradientBg>
);
