import React, { useState, useEffect, useMemo } from "react";

function UseMemoSample() {
  const [count, setCount] = useState(0);

  //Simulate a very slow function
  const slowFunction = () => {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += 1;
    }
    return total;
  };

  //const result = slowFunction();
  const result = useMemo(() => slowFunction(), []); //empty dependency array, so only runs once

  return (
    <div>
      <h2>Without useMemo</h2>
      <p>Slow Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
}
export default UseMemoSample;

//Similar to Use effect but
//Can be used for heavy computation
//Use Memo nag rurun function kasabay ng rendering
//Use effect, render muna ng page

//If use effect and usememo are same, why separate?
//Use effect is for side effects (API calls, subscriptions, etc external data)
//Use memo is for optimizing performance (heavy computations)
//but why?
//Because use effect runs after render, so if heavy computation, user will see lag
//Use memo runs during render, so it can cache the result and avoid lag on re-renders
