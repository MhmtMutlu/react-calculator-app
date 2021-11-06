/* eslint-disable no-eval */
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

  const changeMainText = (value: string, isNumber: boolean, isOperator: boolean ) => {
    if (isNumber) {
      operations.clickButton(value);
    } else if (isOperator) {
      switch (value) {
        case "DEL":
          operations.delete();
          break;

        case "RESET":
          operations.reset();
          break;

        case "+":
          operations.maths(value);
          break;

        case "-":
          operations.maths(value);
          break;

        case "*":
          operations.maths(value);
          break;

        case "/":
          operations.maths(value);
          break;

        case "=":
          operations.equal();
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

  const operations = {
    clickButton: (value: string) => {
      if (reset) {
        setMainText("");
      }
      setMainText((prevState) => prevState + value);
      setReset(false);
    },   
    delete: () => {
      if (mainText !== "" && !reset) {
        const newText = mainText.slice(0, -1);
        setMainText(newText);
      }
    },
    reset: () => {
      setMainText("");
      setLastText("");
      setScreenText("");
    },
    maths: (value: string) => mathOperations(value),
    equal: () => {
      if (lastText === "") {
        setMainText(mainText);
      } else {
        ifOperatorDoesntMatch("");
        setLastText("");
      }
    },
  };

  const mathOperations = (value: string) => {
    if (lastText === "") {
      ifLastTextIsClear(value);
    } else if (lastOperator !== value) {
      ifOperatorDoesntMatch(value);
    } else {
      ifOperatorMatches(value);
    }
  };

  const ifLastTextIsClear = (value: string) => {
    setLastText(mainText);
    setScreenText(mainText);
    setMainText("");
    setLastOperator(value);
  };

  const ifOperatorDoesntMatch = (value: string) => {
    let result = eval(lastText + lastOperator + mainText);
    if (result && result.toString().length > 8) {
      result = parseFloat(result);
    }
    console.log(typeof result, result.toString().length);
    setLastText(result);
    setScreenText(screenText + lastOperator + mainText);
    setMainText(result);
    setLastOperator(value);
    setReset(true);
  };

  const ifOperatorMatches = (value: string) => {
    let result = eval(lastText + value + mainText);
    if (result && result.toString().length > 8) {
      result = parseFloat(result);
    }
    console.log(typeof result, result.toString().length);
    setLastText(result);
    setScreenText(screenText + value + mainText);
    setMainText(result);
    setLastOperator(value);
    setReset(true);
  };

  return (
    <CalcContext.Provider value={{ mainText, screenText, changeMainText }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
