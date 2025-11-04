import React from "react";
function Ternary() {
  let theBoolean = false;
  return <div>{theBoolean ? <div>True!</div> : <div>False!</div>}</div>;
}

export default Ternary;
