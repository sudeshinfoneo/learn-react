import { Link } from "react-router-dom";
import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="display-4"><b>Count: {count}</b></h3>
      <button className="btn btn-primary mr-2" onClick={increment}><b>Increment</b></button>
      <button className="btn btn-secondary" onClick={() => setOtherState(!otherState)}>
        <b>Toggle Other State</b></button>
    </div>
  );
};

export default Counter;

