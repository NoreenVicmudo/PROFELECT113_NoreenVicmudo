import React, { useState, useEffect } from "react";

function SampleUseeffect() {
  /*
  function theAlert() {
    alert("test");
  }*/

  //di nag titrigger function kapag nasa loob yung thealert
  /*
  useEffect(() => {
    function theAlert() {
      alert("test");
    }
    theAlert();
  }, []);*/
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    function theAlert() {
      alert("test");
    }
    theAlert();
  }, [counter]);

  return (
    <div>
      {counter}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add counter
      </button>
    </div>
  );
}

export default SampleUseeffect;

//Use Effect is mostly used in API calls
