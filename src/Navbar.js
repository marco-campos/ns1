import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { supabase } from './config';

const NavBar = () => {
  const location = useLocation()
  const [darkTheme, setDarkTheme] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [fade, setFade] = useState(false);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
      } else {
        console.log('User signed out successfully');
        window.location.href = 'http://localhost:3000/';
      }
    } catch (error) {
      console.error('Unexpected error during sign out:', error);
    }
  };

  useEffect(() => {
    // When the location changes, start the fade effect.
    setFade(true);
    const timeoutId = setTimeout(() => setFade(false), 300); // This should last as long as the transition
  
    // Clear the timeout when the component unmounts or if the location changes again.
    return () => clearTimeout(timeoutId);
  }, [location]);
  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className={`navbar navbar-expand-lg ${darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} ${fade ? 'fade-enter' : ''}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/HomePage">
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
              <NavLink exact to="/homepage" className="nav-link" activeClassName="active" onClick={() => setIsNavCollapsed(true)}>
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
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" onClick={() => {setIsNavCollapsed(true); signOut();}}>
                Sign Out
              </NavLink>
            </li>
            <li className="nav-item">
            <button onClick={toggleTheme} className="btn">
              <i className={`fas ${darkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
