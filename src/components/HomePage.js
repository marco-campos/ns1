import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const HomePage = () => {
  return (
    <div className='container mt-5'>
      <h1 className='mb-4 text-center'>Welcome to the Number Sense Trainer </h1>
      <div>
          <p>This webapp was built to train the next generation for mental math competitions. My goal is to give you a resource that lets test your skills endlessly. </p>
          <p>Eventually, I'd like to write up lessons on the Learn tab to help students learn the tricks all in the same place but I will leave this for a future task once I've implemented the majority of number sense questions as generating functions.</p>
      </div>
      <div className="container mt-5">
      <h2 className="mb-3 text-center">Practice</h2>
      <p className="mb-4 text-center">Ready to test your skills? Head over to the practice section:</p>
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
