import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/logical" activeClassName="active-link">
              Logical
            </NavLink>
          </li>
          <li>
            <NavLink to="/maths" activeClassName="active-link">
              Maths
            </NavLink>
          </li>
          <li>
            <NavLink to="/aptitude" activeClassName="active-link">
              Aptitude
            </NavLink>
          </li>
          <li>
            <NavLink to="/coding" activeClassName="active-link">
              Coding
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
