import React from "react";

function AndRendering() {
  let age = 17;

  return (
    <>
      {age < 18 && <div> You cannot vote!</div>}
      {age >= 18 && <div> You can vote!</div>}
    </>
  );
}

export default AndRendering;

//hide specific to display and cannot be bypassed becauuse you cannot render
