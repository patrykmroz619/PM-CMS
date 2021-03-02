import styled from "@myStyled";
import React from "react";

import ProjectNameSection from "./ProjectNameSection";
import ProjectPublishingSection from "./ProjectPublishingSection";
import DangerZone from "./DangerZone";
import ApiKeySection from "./ApiKeySection";

const Wrapper = styled.div`
  max-width: 900px;
`;

const SettingsView = () => {
  return (
    <Wrapper>
      <ProjectNameSection />
      <ProjectPublishingSection />
      <ApiKeySection />
      <DangerZone />
    </Wrapper>
  );
};

export default SettingsView;
