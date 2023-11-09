// components/StartScreen.js
import React, { useState } from 'react';
import Section1aSkills from './skillsSections/section1/Section1aSkills'; // Import the new component

const StartScreen = ({ startGame, startSkillPractice }) => {
  const [timeOption, setTimeOption] = useState(600); // Default 10 minutes
  const [questionOption, setQuestionOption] = useState(10); // Default 10 questions
  const [selectedSkill, setSelectedSkill] = useState(''); // For skill practice, singular

  const handleTimeChange = (event) => {
    setTimeOption(parseInt(event.target.value, 10));
  };

  const handleQuestionChange = (event) => {
    setQuestionOption(parseInt(event.target.value, 10));
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value); // Now handling a single skill, not multiple
  };

  const handleStart = () => {
    // Pass the selected options to start the game
    startGame(timeOption, questionOption);
  };

  const handleSkillStart = () => {
    // If a skill is selected, pass it to start the skill practice
    if(selectedSkill) {
      startSkillPractice(selectedSkill);
    } else {
      // Handle the case where no skill is selected
      alert("Please select a skill to practice.");
    }
  };
  
  return (
    <div>
      <h1>Number Sense Practice</h1>
      <div>
        <h2>Practice Exam</h2>
        <div>
          <label htmlFor="time-select">Choose a time limit:</label>
          <select id="time-select" value={timeOption} onChange={handleTimeChange}>
            <option value={60}>1 minute</option>
            <option value={300}>5 minutes</option>
            <option value={600}>10 minutes</option>
          </select>
        </div>
        <div>
          <label htmlFor="question-select">Choose the number of questions:</label>
          <select id="question-select" value={questionOption} onChange={handleQuestionChange}>
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={15}>15 questions</option>
            <option value={20}>20 questions</option>
          </select>
        </div>
        <button onClick={handleStart}>Start Game</button>
      </div>
      <div>
        <h2>Practice Skills</h2>
        <p>Pick a type of problem to practice on. There is no timer, just keep working problems and at the end you can see how you did.</p>
        
        {/* Section1aSkills handles its own skill selection */}
        <Section1aSkills
          selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
          onSkillChange={handleSkillChange}
        />

        {/* ... other sections ... */}
        
        <button onClick={handleSkillStart}>Start Skill Practice</button>
        <h3>Coming Soon!</h3>
        {/* ... upcoming sections ... */}
      </div>
    </div>
  );
};

export default StartScreen;
