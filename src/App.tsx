import React from "react";
import Header from "./components/Header/Header";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import ThemeContextProvider from "./contexts/ThemeContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        <Screen />
        <Keypad />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
