import styled from "@myStyled";
import React from "react";

import ProjectNameSection from "./ProjectNameSection";
import ProjectPublishingSection from "./ProjectPublishingSection";
import DangerZone from "./DangerZone";

const Wrapper = styled.div`
  max-width: 900px;
`;

const SettingsView = () => {
  return (
    <Wrapper>
      <ProjectNameSection />
      <ProjectPublishingSection />
      <DangerZone />
    </Wrapper>
  );
};

export default SettingsView;
