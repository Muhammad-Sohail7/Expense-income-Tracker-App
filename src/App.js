import React from 'react';
// import logo from './logo.svg';
import Child from "./child"
import './App.css';
import { TransactionProvider } from "./component/transContext"

function App() {
  return (
    <div >
      <TransactionProvider>
    <Child />
    </TransactionProvider>
    </div>
  );
}

export default App;
