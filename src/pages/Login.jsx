/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit =async (event) => {
    event.preventDefault();
    // if (password == "") {
    //   setError("Please enter correct details!");
    // } else {
      // TODO: Send signup request to server
      // setError("Login successful");
      // setEmail("");
      // setPassword("");


      const responce = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "johnd",
          password: "m38rmF$",
        }),
      });  
      const token = await responce.json();
      console.log(token);
  };



  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row login-wrappe flex-center">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-center text-green mb-3">LOGIN</h2>
              <p className="text-center mb-4 text-green">Welcome Back!!</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="enter email here ..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    // required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="enter password here..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    // required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <Link to="/forgotpasword" className="form-link">
                    Forgot password?
                  </Link>
                </div>
                <div className="flex-center-between mb-3">
                  <p className="m-0">Dont have an account?</p>
                  <Link to="/signup" className="form-link">
                    Sign up
                  </Link>
                </div>
                <div className=" w-full gap-2">
                  <button type="submit" className="login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
