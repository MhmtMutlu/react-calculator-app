import React, { useState } from "react";
import { IContextProvider, IThemeContextInitialState } from "../types";

const initialContextState: IThemeContextInitialState = {
  theme: "first-theme",
  changeTheme: () => {},
};

export const ThemeContext = React.createContext(initialContextState);

const ThemeContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState<string>(initialContextState.theme);

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
