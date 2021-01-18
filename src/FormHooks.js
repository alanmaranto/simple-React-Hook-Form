import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const FormHook = () => {
  const { register, handleSubmit, errors } = useForm();

  console.log('register', register);
  console.log('and handleSubmit', handleSubmit);
  
  const onSubmit = (data) => {
      console.log(data)
  };
  const validatePassword = (value) => {
    if (value.length < 8) {
      return "Password should be at least 8 characters";
    } else if (value.length > 16) {
      return "Password should be less than 16 characters";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return `Password should contain at least 1 lower case letter, 
      1 capital letter, 1 number y 1 symbol`;
    }
    return true;
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            ref={register({
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="error">Email is required</p>
          )}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({
              required: "Password is required",
              validate: validatePassword,
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
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

export default FormHook;
