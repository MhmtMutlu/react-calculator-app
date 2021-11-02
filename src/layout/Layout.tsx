import React from "react";
import "./layout.scss";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="first-theme">{children}</div>
    </div>
  );
};

export default Layout;
