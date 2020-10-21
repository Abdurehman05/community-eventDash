import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = props => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/events">
          Events
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          Location
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/members">
          Members
        </Link>
      </li>
    </ul>
  );
};
