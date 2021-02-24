import styled from "@myStyled";
import React from "react";

import DangerZone from "./DangerZone";
import ProjectNameSection from "./ProjectNameSection";

const Wrapper = styled.div`
  max-width: 900px;
`;

const SettingsView = () => {
  return (
    <Wrapper>
      <ProjectNameSection />
      <DangerZone />
    </Wrapper>
  );
};

export default SettingsView;
