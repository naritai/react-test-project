import { useState } from "react";
import "./Counter.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>This is counter!!!</h1>
      <div>Counts: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}