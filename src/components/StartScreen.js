// components/StartScreen.js
import React, { useState } from 'react';

const StartScreen = ({ startGame }) => {
  const [timeOption, setTimeOption] = useState(600); // Default 10 minutes
  const [questionOption, setQuestionOption] = useState(10); // Default 10 questions

  const handleTimeChange = (event) => {
    setTimeOption(parseInt(event.target.value, 10));
  };

  const handleQuestionChange = (event) => {
    setQuestionOption(parseInt(event.target.value, 10));
  };

  const handleStart = () => {
    // Pass the selected options to start the game
    startGame(timeOption, questionOption);
  };

  return (
    <div>
      <h1>Number Sense Practice</h1>
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
  );
};

export default StartScreen;
