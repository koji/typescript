import React, { useState, useCallback } from "react";
import * as ReactDOM from "react-dom";
import { DumbButton } from "./DumbButton";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, [count, setCount]);

  const handleSub = useCallback(() => {
    setCount((prevCount: number) => prevCount - 1);
  }, [count, setCount]);

  return (
    <div>
      <p>you clicked {count} times.</p>
      <DumbButton onClick={handleAdd}>+</DumbButton>
      <DumbButton onClick={handleSub}>-</DumbButton>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
