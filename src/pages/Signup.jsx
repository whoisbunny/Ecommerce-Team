/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import React, { useState } from "react";
const API = import.meta.env.VITE_API; 

import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // TODO: Send signup request to server
      // setError("Signup successful");
      // setEmail("");
      // setPassword("");
      // setConfirmPassword("");

       axios( {
        url: `${API}/users`,
        method: "POST",
        
        data: {
          email: "John@gmai.com",
          username: "johnd",
          password: "m38rmF$",
          name: {
            firstname: "",
            lastname: "",
          },
          address: {
            city: "",
            street: "",
            number: "",
            zipcode: "",
            geolocation: {
              lat: "",
              long: "",
            },
          },
          phone: "",
        },
      }).then((resp)=>{
        console.log(resp);
      }).catch((err)=>{
        console.log(err);
      });
      

    }
  };
  
  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row flex-center">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-center text-green mb-3">Sign Up</h2>
              <p className="text-center mb-3 text-green">
                Join us in shopping!!
              </p>
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
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="rewrite password here..."
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    // required
                  />
                </div>

                <div className="flex-center-between  mb-3">
                  <p>Have an account?</p>
                  <Link to="/login" className="form-link">
                    Log In
                  </Link>
                </div>
                <div className="gap-2">
                  <button type="submit" className="login_btn">
                    Sign Up
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

export default Signup;
