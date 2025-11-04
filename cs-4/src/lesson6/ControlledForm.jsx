import React, { useState } from "react";
function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2> Controlled Form</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} //kapag inalis to, walang way para ma trigger yung state change
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForm;
