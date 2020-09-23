import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={require("../../assets/img/logo-light.png")} alt="App logo" />
      </Link>
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/generate">Generate</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
