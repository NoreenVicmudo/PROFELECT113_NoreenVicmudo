import React from "react";
function Button({ theFunction }) {
  //return <button style={{ color: "blue" }}>Click Me</button>;
  return (
    <button
      onClick={theFunction}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      Click Me
    </button>
  );
}

export default Button;
