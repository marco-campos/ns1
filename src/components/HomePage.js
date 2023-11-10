import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const HomePage = () => {
  return (
    <div className='container mt-5'>
      <h1 className='mb-4 text-center'>Welcome to the Number Sense Trainer </h1>
      <div>
          <p>This (name pending) webapp was built to train the next generation for mental math competitions. No more do we have to rely on the education system bringing us coaches or having to dig for new exams, 
          my goal is to give you a product that lets test your skills endlessly.</p>
      </div>
      <div className="container mt-5">
      <h2 className="mb-3">Practice</h2>
      <p className="mb-4">Ready to test your skills? Head over to the practice section:</p>
      <div className="d-flex justify-content-center">
        <Link to="/practice" className="btn btn-primary btn-lg">
          Train!
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
