import React from 'react';
import { Link } from 'react-router-dom';
import LessonsGroup from './LessonsGroup'

const LearningPage = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Learning Resources</h1>
      <LessonsGroup />
      {/* Section with external link */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">External Resources</h2>
          <h3>Books</h3>
          <p>Bryant Heath wrote a wonderful book several years ago about number sense tricks which is available for free on his website:</p>
          <p>If you need to find a trick for a less common type of problem, you should definitely dig through the book, I'll do my best to keep all of the absolutely necessary ones here.</p>
          <a href="https://bryantheath.com/files/2018/04/Heath_NSTricks_revA.pdf" 
             className="btn btn-primary mb-3"
             target="_blank" 
             rel="noopener noreferrer">
            BryantHeath.com
          </a>
          <h3>Texas Math Mundo</h3>
          <p>This channel was created by a former colleague and rival of mine to bring the competitive math scene in Texas together.</p>
          <p> He posts a lot of interviews with people from the competitive math scene as well as tips and tricks to improve. Check him out!</p>
          <a href="https://www.youtube.com/channel/UCDHQCWfSMjNJJS0aJx8jITw" 
            className="btn btn-primary"

             target="_blank" 
             rel="noopener noreferrer">
            Texas Math Mundo YouTube Channel
          </a>
        </div>
      </div>
      
      {/* Section with link to Practice page */}
      <div className="card">
        <div className="card-body text-center">
          <h2 className="card-title">Practice Skills</h2>
          <p>Ready to test your skills? Head over to the practice section:</p>
          <Link to="/practice" className="btn btn-primary">Go to Practice</Link>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
