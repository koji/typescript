import React, { useState, useEffect } from 'react';

interface Counter {
  counter: number;
}

interface Person {
  name: string;
}

const FCCounter = () => {
  const initialValue = 0;
  const [counter, setCount] = useState<Counter>({ counter: initialValue}); // initial value 0
  const [person, setName] = useState<Person>({name: ''});

  useEffect(() => {
    console.log('useEffect - updated');
    document.title = `You Clicked ${counter.counter} times`;
  }, [counter])

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
      <input type="text" value={person.name} onChange={e => setName({name: e.target.value})} />
      <p>Hooks-Count {counter.counter}</p>
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

