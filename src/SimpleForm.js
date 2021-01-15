import React, { useState } from "react";
import "./style.css";

const App = () => { 
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // Send State
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default App;
