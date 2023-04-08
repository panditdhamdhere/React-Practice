// In this react practice im just making simple increment and decrement counterapp using useState react hook

import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  function incre() {
    setCount(count + 1);
  }
  function decre() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>
        <span>{count} :-</span>
      </h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  );
};

export default UseState;


// ReactUseStae Learned

const pandit = Tra