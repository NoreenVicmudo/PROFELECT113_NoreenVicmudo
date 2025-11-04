import React, { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);

  let firstNum = 0;

  const increment = () => {
    setCount(count + 1);
    firstNum = firstNum + 1;

    console.log("Count: ", count);
    console.log("firstNum: ", firstNum);
  };

  return (
    <>
      <h1>Counter with UseState: {count}</h1>
      <h1>Counter Ordinary Let: {firstNum}</h1>

      <button onClick={increment}>Increment</button>
    </>
  );
}

export default UseState;
