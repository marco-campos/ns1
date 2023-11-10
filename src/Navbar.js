import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img
            src="/favicon-32x32.png" // Assuming the image is in the public directory
            alt="NS Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Number Sense Trainer
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => setIsNavCollapsed(true)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/learning" className="nav-link" activeClassName="active" onClick={() => setIsNavCollapsed(true)}>
                Learning
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/practice" className="nav-link" activeClassName="active" onClick={() => setIsNavCollapsed(true)}>
                Practice
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={() => setIsNavCollapsed(true)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
