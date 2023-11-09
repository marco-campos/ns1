import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink allows you to style the active route

const NavBar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/learning" activeClassName="active">
            Learning
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice" activeClassName="active">
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
