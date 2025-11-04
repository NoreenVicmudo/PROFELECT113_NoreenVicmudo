import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Submitted Name: ${data.firstname} ${data.lastname}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> React Hook Form</h2>
      <input
        type="text"
        {...register("firstname", { required: true })}
        placeholder="Enter your name"
      />
      {errors.firstname?.type === "required" && <p>First name is required</p>}
      <input
        type="text"
        {...register("lastname", { required: true })}
        placeholder="Enter your name"
      />
      {errors.lastname?.type === "required" && <p>Last name is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookForm;

//dito may validation na built in
//yung errors ay kahit saan pwede ilagay
