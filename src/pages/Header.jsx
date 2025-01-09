import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[var(--Neutral-5)] border-b border-[var(--border-stroke)] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink
            to="/"
            className="text-[var(--accent-blue-headers)] text-xl font-bold hover:text-[var(--accent-blue)] transition duration-300 space-mono-bold"
          >
            _GetMePlaced_
          </NavLink>

          <nav>
            <ul className="flex space-x-12">
              <li>
                <NavLink
                  to="http://localhost:3001/dsa"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 space-mono-regular ${
                      isActive
                        ? "text-[var(--accent-blue)] border-b-2 border-[var(--accent-blue)] pb-2"
                        : "text-[var(--gray-300)] hover:text-[var(--accent-blue)]"
                    }`
                  }
                >
                  {"<DSA/>"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aptitude"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 space-mono-regular ${
                      isActive
                        ? "text-[var(--accent-blue)] border-b-2 border-[var(--accent-blue)] pb-2"
                        : "text-[var(--gray-300)] hover:text-[var(--accent-blue)]"
                    }`
                  }
                >
                  {"<Aptitude/>"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 space-mono-regular ${
                      isActive
                        ? "text-[var(--accent-blue)] border-b-2 border-[var(--accent-blue)] pb-2"
                        : "text-[var(--gray-300)] hover:text-[var(--accent-blue)]"
                    }`
                  }
                >
                  {"<Test/>"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="http://localhost:3001/resupload"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 space-mono-regular ${
                      isActive
                        ? "text-[var(--accent-blue)] border-b-2 border-[var(--accent-blue)] pb-2"
                        : "text-[var(--gray-300)] hover:text-[var(--accent-blue)]"
                    }`
                  }
                >
                  {"<Interview/>"}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
