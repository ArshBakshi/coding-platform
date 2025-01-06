// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">My Quiz App</div>
      <nav>
        <ul className="navbar-list">
          <li><NavLink to="/coding" className="navbar-link" activeClassName="active-link">DSA</NavLink></li>
          <li><NavLink to="/logical" className="navbar-link" activeClassName="active-link">Logical</NavLink></li>
          <li><NavLink to="/maths" className="navbar-link" activeClassName="active-link">Maths</NavLink></li>
          <li><NavLink to="/aptitude" className="navbar-link" activeClassName="active-link">Aptitude</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
