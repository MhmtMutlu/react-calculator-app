import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { IContextProvider, IThemeContextInitialState } from "../types";

const selectedTheme  = localStorage.getItem("theme")

const initialContextState: IThemeContextInitialState = {
  theme: selectedTheme != null ? JSON.parse(selectedTheme) : "first-theme",
  changeTheme: () => {},
};

export const ThemeContext = React.createContext(initialContextState);

const ThemeContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", initialContextState.theme);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
