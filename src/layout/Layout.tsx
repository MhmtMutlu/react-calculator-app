import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./layout.scss";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="layout-container">
      <div className={theme}>
        <div className="calculator-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
