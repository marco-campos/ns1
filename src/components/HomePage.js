import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Number Sense Trainer </h1>
      <div>
          <p>This (name pending) webapp was built to train the next generation for mental math competitions. No more do we have to rely on the education system bringing us coaches or having to dig for new exams, 
          my goal is to give you a product that lets test your skills endlessly.</p>
      </div>
      <div>
        <h2>Practice</h2>
        <p>Ready to test your skills? Head over to the practice section:</p>
        <Link to="/practice">Train!</Link>
      </div>
    </div>
  );
};

export default HomePage;
