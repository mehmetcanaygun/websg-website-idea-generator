import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={require("../../assets/img/logo-light.png")} alt="App logo" />
      </Link>
      <ul className={toggled ? "nav-list toggled" : "nav-list"}>
        <li className="nav-link">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/generate">Generate</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button
        className={toggled ? "nav-menu-btn toggled" : "nav-menu-btn"}
        onClick={() => setToggled(!toggled)}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </button>
    </nav>
  );
};

export default Navbar;
