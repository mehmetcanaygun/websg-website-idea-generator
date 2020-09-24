import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="page home-page container">
      <div className="home-wrapper">
        <div className="info">
          <h1>Looking for an idea?</h1>
          <p>
            It's built for developers who want to use their skills to build
            websites for practice purposes but cannot come up with ideas.
          </p>
          <Link to="/generate">Generate One</Link>
        </div>
        <div className="img">
          <img src={require("../../assets/img/home-bg.svg")} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
