import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="text-white text-xl font-bold hover:text-blue-400 transition duration-300"
          >
            My Quiz App
          </NavLink>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/coding"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-2"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  DSA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aptitude"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-2"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  Aptitude
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-2"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  Test
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="http://172.16.13.42:3001"
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-2"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  Interview
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
