import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const FormHooksErrors = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label>Email</label>
          <input type="text" name="email" ref={register({ required: true })} />
          {errors.email && errors.email.type === "required" && (
            <p className="error">Email is required</p>
          )}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="error">Password is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="error">Password should be at least 8 characters</p>
          )}
        </div>
        <div className="form-input">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormHooksErrors;
