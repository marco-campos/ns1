// components/StartScreen.js
import React, { useState } from 'react';

const StartScreen = ({ startGame, startSkillPractice }) => {
  const [timeOption, setTimeOption] = useState(600); // Default 10 minutes
  const [questionOption, setQuestionOption] = useState(10); // Default 10 questions
  const [selectedSkills, setSelectedSkills] = useState([]); // For skill practice

  const handleTimeChange = (event) => {
    setTimeOption(parseInt(event.target.value, 10));
  };

  const handleQuestionChange = (event) => {
    setQuestionOption(parseInt(event.target.value, 10));
  };

  const handleSkillChange = (event) => {
    const value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSkills(value);
  };

  const handleStart = () => {
    // Pass the selected options to start the game
    startGame(timeOption, questionOption);
  };

  const handleSkillStart = () => {
    // Pass only the first selected skill to start the skill practice
    if(selectedSkills.length > 0) {
      startSkillPractice(selectedSkills[0]);
    } else {
      // Handle the case where no skill is selected
      alert("Please select at least one skill to practice.");
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
            <h3>Section 1: Arithmetic Tricks</h3>
            <h4>Section 1a: Multiplication</h4>
            <div>
                <label htmlFor="skill-select">Choose skills to practice:</label>
            </div>
            <div>
                <select multiple id="skill-select" value={selectedSkills} onChange={handleSkillChange}>
                <option value="foil2x2">Foil 2x2</option>
                <option value="foil2x3">Foil 2x3</option>
                <option value="foil3x3">Foil 3x3</option>
                <option value="multiply11">Multiply by 11</option>
                <option value="multiply111">Multiply by 111</option>
                <option value="multiply101">Multiply by 101</option>
                <option value="multiply25">Multiply by 25</option>
                <option value="multiply75">Multiply by 75</option>
                <option value="multiplyNear100">Multiply two numbers near 100</option>
                <option value="squaresEnd5">Squares ending in 5</option>
                <option value="squares4159">Squares between 41 and 59</option>
            
                {/* Add more options here as needed */}
                </select>
                <button onClick={handleSkillStart}>Start Skill Practice</button>
            </div>
            <h3>Coming Soon!</h3>
            <h4>Section 1b: Factoring</h4>
            <h4>Section 1c: Improper Fractions</h4>
            <h4>Section 1d: Division</h4>
            <h4>Section 1e: Misc Arithmetic</h4>

            <h3>Section 2: Memorization</h3>        
        </div>
    </div>
  );
};

export default StartScreen;
