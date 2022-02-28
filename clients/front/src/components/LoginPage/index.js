import React, { useState } from "react";

const Login = ({ handleLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid big-bg">
      <div className="half-width white-bg">
        <h1 className="app-header">Login</h1>
        <br />
        <form
          onSubmit={handleLogin(email, password)}
          className="flex"
          action=""
        >
          <div className="form-group">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <br />
          {error.length > 0 && <div className="error">{error}</div>}
          <button type="submit" className="btn btn-primary right-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
