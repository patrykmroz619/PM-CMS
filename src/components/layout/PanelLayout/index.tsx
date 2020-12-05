import React from "react";
import { Link } from "react-router-dom";

type PanelLayoutProps = { children: React.ReactChild };

const PanelLayout = ({ children }: PanelLayoutProps) => (
  <div>
    <div>{children}</div>
    <Link to="/login">Login</Link>
  </div>
);

export { PanelLayout };
