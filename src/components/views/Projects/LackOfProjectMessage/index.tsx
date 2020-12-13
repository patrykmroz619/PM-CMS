import React from "react";
import styled from "@myStyled";

import { projectsPage as content } from "@content";
import BoxIcon from "@assets/box.svg";
import media, { breakpoints } from "@mediaQuery";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  width: 100%;
  order: 1;

  svg {
    margin-bottom: ${({ theme }) => theme.spacing.m};
    width: 130px;
    height: 130px;
  }
`;

const Message = styled.p`
  flex-basis: 100%;
  text-align: center;
  font-weight: 700;

  ${media(breakpoints.tablet.xl)} {
    font-size: 18px;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const LackOfProjectMessage = () => (
  <Wrapper>
    <BoxIcon />
    <Message>{content.lackOfProjects}</Message>
  </Wrapper>
);

export default LackOfProjectMessage;
