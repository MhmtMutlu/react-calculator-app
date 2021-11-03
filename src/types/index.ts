import React from "react";

export interface IThemeContextInitialState {
  theme: string;
  changeTheme: (theme: string) => void;
}

export interface IContextProvider {
  children: React.ReactNode;
}
