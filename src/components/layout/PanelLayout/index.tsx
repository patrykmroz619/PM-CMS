import React from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import useHeadings from "./useHeadings";
import Navigation from "./Navigation";

type PanelLayoutProps = { children: React.ReactChild };

const PanelLayout = ({ children }: PanelLayoutProps) => {
  const [heading, subheading] = useHeadings();

  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export { PanelLayout };
