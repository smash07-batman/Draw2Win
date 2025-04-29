"use client";
import React, { useState } from "react";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate user input
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Make API call for authentication
    // Replace with your actual API endpoint
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <section id="login-section">
        <header>{/* Your header content */}</header>
        <div className="login-container">
          <div className="login-box">
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Phone or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
            <p>
              Already have an account? <a href="login.html">Login</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
