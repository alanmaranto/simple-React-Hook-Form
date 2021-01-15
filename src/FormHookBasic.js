import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const FormHookBasic = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label>Email</label>
          <input type="text" name="email" ref={register} />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" name="password" ref={register} />
        </div>
        <div className="form-input">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormHookBasic;
