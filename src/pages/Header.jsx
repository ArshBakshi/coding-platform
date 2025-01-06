// Header.js
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">My Quiz App</div>
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/coding"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              DSA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logical"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              Logical
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/maths"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              Maths
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aptitude"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              Aptitude
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
