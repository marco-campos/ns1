import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './components/helper/ThemeContext';


const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);
  console.log("theme: ",darkTheme)
  return (
    <footer className={`text-center text-lg-start ${darkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Number Sense Trainer</h5>

            <p>
              Dedicated to helping students excel in mathematics competitions and improve their number sense skills.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/about" className="text-dark">About</Link>
              </li>
              <li>
                <Link to="/learning" className="text-dark">Learning</Link>
              </li>
              <li>
                <Link to="/practice" className="text-dark">Practice</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <a href="mailto:camposmathematics@gmail.com" className="text-dark">camposmathematics@gmail.com</a>
              </li>
              <li>
                <a href="https://twitter.com/mcamposmath" className="text-dark" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/marco-campos24/" className="text-dark" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/marco-campos" className="text-dark" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
                </a>
            </li>
            <li>
              <a href="https://discord.gg/wUWwzbFw" className="text-dark" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i> Discord Server
              </a>
            </li>
              {/* Add additional contact methods as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Number Sense Trainer: All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
