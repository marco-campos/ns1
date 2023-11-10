import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Your Navbar component
import HomePage from './components/HomePage';
import LearningPage from './components/LearningPage';
import PracticePage from './components/PracticePage'; // Renamed App.js to PracticePage.js
import AboutPage from './components/AboutPage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Use 'Route' with 'element' prop instead of 'component' */}
      </Routes>
      <Footer />
    </Router>
 
  );
}

export default App;
