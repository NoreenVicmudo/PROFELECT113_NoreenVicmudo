import React, { useRef } from "react";
//user ref, kinukuha ang properties ng element (innterhtml, value, etc)

function UncontrolledForm() {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2> Uncontrolled Form</h2>
        <input
          type="text"
          ref={nameRef} //gamitin ang ref dito
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledForm;

//difference with controlled and uncontrolled form
//controlled form uses state to manage the form data
//uncontrolled form uses refs to access the form data directly from the DOM