//Component tawag sa mga dinidisplay

import React from "react";
import Button from "../components/Button";

/*
const PropsGreet = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};*/

function PropsGreet({ name }) {
  function AlertMessage() {
    alert("test");
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <Button theFunction={AlertMessage} />
    </>
  );
}

export default PropsGreet;

//isang code tas pwede gawing multiple
