"use client";
import React from "react";

const signup = () => {
  return (
    <div>
      <section id="login-section">
        <header>
          <nav className="container">
            <div className="logo-links">
              <a href="index.html">
                {" "}
                <img src="./images/logo1.png" alt="" />{" "}
              </a>
              <ul id="navbar">
                <a className="logo-nav" href="index.html">
                  <img src="./images/logo1.png" alt="" />
                </a>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <i id="close" className="fa-solid fa-xmark" />
              </ul>
              <div id="mobile">
                <i id="bar" className="fa-solid fa-bars" />
              </div>
            </div>
            <div className="login">
              <a href="login.html">
                Login <i className="fa-solid fa-right-to-bracket" />
              </a>
            </div>
          </nav>
        </header>
        <div className="login-container">
          <div className="login-box">
            <h1>SIGNUP</h1>
            <input type="text " placeholder="Your Full Name" />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Phone or Email"
            />
            <input type="password" name="" id="" placeholder="Your Password" />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Your Password"
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <p>
              Already have an account ? <a href="login.html">Login</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default signup;
