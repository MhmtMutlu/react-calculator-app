import React from 'react';
import Header from './components/Header/Header';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import Layout from './layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Screen />
        <Keypad />
      </Layout>
    </div>
  );
}

export default App;
