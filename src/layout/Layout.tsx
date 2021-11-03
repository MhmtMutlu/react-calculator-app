import React from "react";
import "./layout.scss";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="third-theme">
        <div className="calculator-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
