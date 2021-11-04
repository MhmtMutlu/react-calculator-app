import React, { useState } from "react";
import { IContextProvider, ICalcContextInitialState } from "../types";

const initialContextState: ICalcContextInitialState = {
  mainText: "",
  screenText: "",
  changeMainText: () => {},
};

export const CalcContext = React.createContext(initialContextState);

const CalcContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [mainText, setMainText] = useState<string>(initialContextState.mainText);
  const [lastText, setLastText] = useState<string>("");
  const [lastOperator, setLastOperator] = useState<string>("");
  const [screenText, setScreenText] = useState<string>(initialContextState.screenText);
  const [reset, setReset] = useState<boolean>(false);

  const changeMainText = (value: string,isNumber: boolean,isOperator: boolean) => {
    if (isNumber) {
      if (reset) {
        setMainText("");
      }
      setMainText((prevState) => prevState + value);
      setReset(false);
    } else if (isOperator) {
      switch (value) {
        case "DEL":
          if (mainText !== "" && !reset) {
            const newText = mainText.slice(0, -1);
            setMainText(newText);
          }
          break;

        case "RESET":
          setMainText("");
          setLastText("");
          setScreenText("");
          break;

        case "+":
          if (lastText === "") {
            ifLastTextIsClear(value);
          } else if (lastOperator !== value) {
            ifOperatorDoesntMatch(value);
          } else {
            ifOperatorMatches(value);
          }
          break;

        case "-":
          if (lastText === "") {
            ifLastTextIsClear(value);
          } else if (lastOperator !== value) {
            ifOperatorDoesntMatch(value);
          } else {
            ifOperatorMatches(value);
          }
          break;

        case "*":
          if (lastText === "") {
            ifLastTextIsClear(value);
          } else if (lastOperator !== value) {
            ifOperatorDoesntMatch(value);
          } else {
            ifOperatorMatches(value);
          }
          break;

        case "/":
          if (lastText === "") {
            ifLastTextIsClear(value);
          } else if (lastOperator !== value) {
            ifOperatorDoesntMatch(value);
          } else {
            ifOperatorMatches(value);
          }
          break;

        case "=":
          if (lastText === "") {
            setMainText(mainText);
          } else {
            ifOperatorDoesntMatch("");
            setLastText("");
          }
          break;

        default:
          setLastOperator("");
          setLastText("");
          setMainText("");
          setReset(false);
          setScreenText("");
          break;
      }
    }
  };

  const ifLastTextIsClear = (value: string) => {
    setLastText(mainText);
    setScreenText(mainText);
    setMainText("");
    setLastOperator(value);
  }

  const ifOperatorDoesntMatch = (value: string) => {
    let result = eval(lastText + lastOperator + mainText);
    if (result && result.toString().length > 8) {
      result = parseFloat(result)
    }
    console.log(typeof result, result.toString().length)
    setLastText(result);
    setScreenText(screenText + lastOperator + mainText);
    setMainText(result);
    setLastOperator(value);
    setReset(true);
  };

  const ifOperatorMatches = (value: string) => {
    let result = eval(lastText + value + mainText);
    if (result && result.toString().length > 8) {
      result = parseFloat(result)
    }
    console.log(typeof result, result.toString().length)
    setLastText(result);
    setScreenText(screenText + value + mainText);
    setMainText(result);
    setLastOperator(value);
    setReset(true);
  };

  return (
    <CalcContext.Provider
      value={{ mainText, screenText, changeMainText }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
