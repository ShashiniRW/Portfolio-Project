import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi I'm a </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "MERN Stack Developer!",
                  "React Native Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="shashini.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
