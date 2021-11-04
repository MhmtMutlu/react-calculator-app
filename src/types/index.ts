import React from "react";

export interface IThemeContextInitialState {
  theme: string;
  changeTheme: (theme: string) => void;
}

export interface ICalcContextInitialState {
  mainText: string;
  screenText: string;
  changeMainText: (value: string, isNumber: boolean, isOperator: boolean) => void;
}

export interface IContextProvider {
  children: React.ReactNode;
}

export interface IButton {
  children: React.ReactNode,
  value: string,
  className?: string,
  isNumber: boolean,
  isOperator: boolean
}
