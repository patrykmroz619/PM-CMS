import React from "react";
import { Link } from "react-router-dom";

type LayoutProps = { children: React.ReactChild };

const Layout = ({ children }: LayoutProps) => (
  <div>
    <div>{children}</div>
    <Link to="/login">Login</Link>
  </div>
);

export default Layout;
