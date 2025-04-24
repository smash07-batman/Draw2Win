import React from "react";

const login = () => {
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
            <h1>LOGIN</h1>
            <input type="text " placeholder="Your Phone or Email" />
            <input type="password" name="" id="" placeholder="Your Password" />
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <div className="devider">OR</div>
            <div className="link-btn">
              <button className="google-btn">
                <a href="">
                  Continue with Google <i className="fa-brands fa-google" />
                </a>
              </button>
              <button className="fb-btn">
                <a href="">
                  Continue with Facebook{" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </button>
              <button className="twitter-btn">
                <a href="">
                  Continue with Twitter <i className="fa-brands fa-twitter" />
                </a>
              </button>
            </div>
            <p>
              New to Draw2win ? <a href="signup.html">Signup</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
