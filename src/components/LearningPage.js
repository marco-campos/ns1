import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const LearningPage = () => {
  return (
    <div>
      <h1>Learning Resources</h1>
      
      {/* Section with external link */}
      <div>
        <h2>External Resources</h2>
        <h3>Books</h3>
        <p>Bryant Heath wrote a wonderful book several years ago about number sense tricks:</p>
        <a href="https://bryantheath.com/files/2018/04/Heath_NSTricks_revA.pdf" target="_blank" rel="noopener noreferrer">
          BryantHeath.com
        </a>
        <h3>Texas Math Mundo</h3>
        <p>This channel was created by a former colleague and rival of mine to bring the competitive math scene in Texas together. Check him out!</p>
        <a href="https://www.youtube.com/channel/UCDHQCWfSMjNJJS0aJx8jITw" target="_blank" rel="noopener noreferrer">
          Texas Math Mundo Youtube Channel
        </a>
      </div>
      
      {/* Section with link to Practice page */}
      <div>
        <h2>Practice Skills</h2>
        <p>Ready to test your skills? Head over to the practice section:</p>
        <Link to="/practice">Go to Practice</Link>
      </div>
    </div>
  );
};

export default LearningPage;
