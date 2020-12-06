import React from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Navigation from "./Navigation";

type PanelLayoutProps = { children: React.ReactChild };

const PanelLayout = ({ children }: PanelLayoutProps) => {
  return (
    <>
      <Header />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export { PanelLayout };
