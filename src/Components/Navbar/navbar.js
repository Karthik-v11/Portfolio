import "./navbar.css";
import img from "../logo.png";
import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <menu className="navbar">
      <img src={img} alt="logo" />
      <nav className="nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
};

export default navbar;
