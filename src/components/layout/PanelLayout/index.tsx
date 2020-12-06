import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { getSubheading } from "./helper";
import Navigation from "./Navigation";

type PanelLayoutProps = { children: React.ReactChild };

const PanelLayout = ({ children }: PanelLayoutProps) => {
  const location = useLocation();

  const subheading = useMemo(() => getSubheading(location.pathname), [location.pathname]);

  return (
    <>
      <Header subheading={subheading} />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export { PanelLayout };
