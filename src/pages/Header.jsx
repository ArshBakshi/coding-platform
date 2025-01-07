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
              to="/aptitude"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              Aptitude
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
            >
              Test
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
