import React, { useState } from 'react';

export default function Calculator() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  function calculate(operator) {
    const a = Number(first);
    const b = Number(second);
    if (first === '' || second === '' || !Number.isFinite(a) || !Number.isFinite(b)) {
      setResult('Enter two valid numbers');
      return;
    }
    switch (operator) {
      case '+': setResult(a + b); break;
      case '-': setResult(a - b); break;
      case '*': setResult(a * b); break;
      case '/': setResult(b === 0 ? 'Cannot divide by zero' : a / b); break;
      default: break;
    }
  }

  return (
    <section>
      <h2>Calculator</h2>
      <label>First number<input type="number" step="any" value={first} onChange={e => { setFirst(e.target.value); setResult(''); }} /></label>
      <label>Second number<input type="number" step="any" value={second} onChange={e => { setSecond(e.target.value); setResult(''); }} /></label>
      <div className="buttons">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>−</button>
        <button onClick={() => calculate('*')}>×</button>
        <button onClick={() => calculate('/')}>÷</button>
      </div>
      <p className="result" aria-live="polite">Result: {result === '' ? '—' : result}</p>
    </section>
  );
}
