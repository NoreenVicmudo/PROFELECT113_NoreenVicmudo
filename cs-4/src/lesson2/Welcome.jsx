import React from "react";
import Button from "../components/Button";

function Welcome() {
  function secondAlert() {
    alert("ALERT NUMBER 2");
  }
  return (
    <>
      <h1>Welcome to React Props Lesson</h1>
      <Button theFunction={secondAlert} />
    </>
  );
}

export default Welcome;
