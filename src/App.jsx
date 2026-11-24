import React from 'react';
import Counter from './Counter.jsx';
import Calculator from './Calculator.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <header><h1>Counter and Calculator</h1><p>Question 7 · React useState</p></header>
      <main><Counter /><Calculator /></main>
      <footer>React State Demonstration</footer>
    </>
  );
}
