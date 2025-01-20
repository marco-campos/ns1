// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './components/HomePage';
import LearningPage from './components/LearningPage';
import LandingPage from './components/LandingPage';
import PracticePage from './components/PracticePage';
import AboutPage from './components/AboutPage';
import Footer from './Footer';
import ThemeContext from './components/helper/ThemeContext'; // Import the ThemeContext

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Use 'Route' with 'element' prop instead of 'component' */}
        </Routes>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
