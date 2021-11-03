import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.value);
  };

  return (
    <div className="calculator-header">
      <h1 className="calculator-title">calc</h1>
      <div className="calculator-theme">
        <span className="theme-title">THEME</span>
        <div className="themes">
          <div className="theme-texts">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="theme-buttons" onChange={handleChange}>
            <input
              type="radio"
              name="theme"
              value="first-theme"
              checked={theme === "first-theme"}
            />
            <input
              type="radio"
              name="theme"
              value="second-theme"
              checked={theme === "second-theme"}
            />
            <input
              type="radio"
              name="theme"
              value="third-theme"
              checked={theme === "third-theme"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
