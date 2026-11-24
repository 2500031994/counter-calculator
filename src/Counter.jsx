import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter</h2>
      <output className="count">{count}</output>
      <div className="buttons">
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={() => setCount(c => c - 1)}>Decrement</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
