import React from "react";

const Home = () => {
  return (
    <div>
      <>
        <section id="home">
          <a href="#home">
            <i className="fa-solid fa-angles-up top-arrow" />
          </a>
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
                    <a className="active" href="#home">
                      Home
                    </a>
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
                <a href="/login">
                  Login <i className="fa-solid fa-right-to-bracket" />
                </a>
              </div>
            </nav>
          </header>
          <div className="hero-section">
            <img src="./images/logo1.png" alt="" />

            <h1>
              Draw<span>2</span>Win
            </h1>
            <p>Unleash Your Inner Artist – Play Draw2Win!</p>
            <p>
              A fun, interactive drawing and guessing game for friends and
              family. No skills required—just creativity and laughter!
            </p>
            <a href="#about">Learn more</a>
          </div>
        </section>
        <section id="about">
          <div className="overlay">
            <div className="container">
              <h2>About the Game</h2>
              <div className="about-content">
                <div className="text-container">
                  <p>
                    Draw2Win is an interactive, creativity-driven game that
                    combines quick thinking and artistic skills. Players are
                    tasked with drawing unique prompts, while others try to
                    guess the drawings. The challenge lies not only in creating
                    the most accurate illustrations but also in crafting amusing
                    and imaginative interpretations. With an emphasis on fun and
                    collaboration, Draw2Win fosters teamwork and creative
                    expression, making it an ideal activity for group engagement
                    and entertainment.
                  </p>
                  <p>
                    Players are given a prompt (usually a phrase or a bizarre
                    sentence), which they then have to draw on their device. The
                    challenge is that players aren't skilled artists, so the
                    drawings are often funny or intentionally bad. The other
                    players then try to guess what the drawing represents.
                    Points are awarded to the correct guesses and the most
                    convincing (or funny) fake answers. The goal is to
                    accumulate the highest score by the end of the game
                  </p>
                  <p>Features that make this game more entertaining include:</p>
                  <li>
                    In-game chat box: You can communicate with your friends
                    while playing, making the game even more entertaining.
                  </li>
                  <li>
                    Text filtering: By turning on this setting, the game will
                    automatically filter out offensive content or hate speech.
                  </li>
                </div>
                <div className="game-info">
                  <div>
                    <span className="title">Release Date</span>
                    <span className="value">coming soon</span>
                  </div>
                  <div>
                    <span className="title">Game Type</span>
                    <span className="value">Drawing</span>
                  </div>
                  <div>
                    <span className="title">Player Count</span>
                    <span className="value">3 - 8 Players</span>
                  </div>
                  <div>
                    <span className="title">Duration</span>
                    <span className="value">15 Minutes</span>
                  </div>
                  <div>
                    <span className="title">Family Friendly Setting</span>
                    <span className="checkmark">✔</span>
                  </div>
                  <div>
                    <span className="title">Moderation Settings</span>
                    <span className="checkmark">✔</span>
                  </div>
                  <div>
                    <span className="title">Audience Capacity</span>
                    <span className="value">10,000</span>
                  </div>
                </div>
              </div>
              <h2>Team Members</h2>
              <div className="members-content">
                <div className="member-card">
                  <div>
                    <img src="./images/pfp.avif" alt="" />
                  </div>
                  <div>
                    <h3>Aditya Shukla</h3>
                    <p>Frontend Developer</p>
                    <p>
                      <i className="fa-solid fa-envelope" /> as5524801@gmail.com
                    </p>
                    <div className="social-links">
                      <a className="linkedin" href="">
                        Linkedin <i className="fa-brands fa-linkedin" />
                      </a>
                      <a className="Github" href="">
                        Github <i className="fa-brands fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-card">
                  <div>
                    <img src="./images/pfp.avif" alt="" />
                  </div>
                  <div>
                    <h3>Anubhav Pandey</h3>
                    <p>Frontend Developer</p>
                    <p>
                      <i className="fa-solid fa-envelope" />{" "}
                      anubhawpandey99@gmail.com
                    </p>
                    <div className="social-links">
                      <a className="linkedin" href="">
                        Linkedin <i className="fa-brands fa-linkedin" />
                      </a>
                      <a className="Github" href="">
                        Github <i className="fa-brands fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="contact container">
              <h2>CONTACT</h2>
              <p className="ques">
                Have a question or want to suggest anything?
              </p>
              <input
                type="hidden"
                name="access_key"
                defaultValue="f21dfd57-5204-424a-aeb9-16dda0f893a3"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="userInput"
                required=""
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="userInput"
                required=""
              />
              <textarea
                placeholder="Your Message"
                className="userInput"
                defaultValue={""}
              />
              <button className="submit-btn" type="submit-button">
                SUBMIT
              </button>
            </div>
          </form>
        </section>
        <footer>
          <div className="overlay2">
            <div className="footer-content container">
              <div className="upper">
                <a href="index.html">
                  <img src="./images/logo1.png" alt="" />
                </a>
                <div className="icons">
                  <a href="">
                    {" "}
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="lower">
                <p>© Copyright 2025 Draw2Win. All rights reserved.</p>
                <div className="terms">
                  <a href="">Terms and Services</a>
                  <a href="">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Home;
