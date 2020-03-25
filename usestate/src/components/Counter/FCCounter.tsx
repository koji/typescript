import React, { useState } from 'react';

interface Counter {
  counter: number;
}

const FCCounter = () => {
  const initialValue = 0;
  const [counter, setCount] = useState<Counter>({ counter: initialValue}); // initial value 0

  // +1
  const handleIncrement = () => {
    setCount({ counter: counter.counter + 1 });
  }

  // -1
  const handleDecrement = () => {
    setCount({ counter: counter.counter - 1 });
  }

  // reset count
  const handleReset = () => {
    setCount({ counter: initialValue });
  }

  // +10
  const incrementTen = () => {
    setCount({ counter: counter.counter + 10});
  }

  return (
    <div>
      <h1>class component</h1>
      <p>Count {counter.counter}</p>
      <br/>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
      <br/>
      <button onClick={incrementTen}>increment10</button>
    </div>
  )
}

export {
  FCCounter
}

