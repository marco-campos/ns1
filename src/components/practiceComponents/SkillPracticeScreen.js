// components/SkillPracticeScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import TextDisplay from '../TextDisplay';
import ButtonInput from './ButtonInput'; // Assuming ButtonInput is in the same directory
import Switch from 'react-switch';

// import { foil2x2, foil2x3, foil3x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159 } from './utils/section1/section1a';

const SkillPracticeScreen = ({ endPractice, skillType, questionGenerator }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [useButtonInput, setUseButtonInput] = useState(false); // New state for toggling input method

  // Using useCallback to memoize the function so it doesn't change unless skillType changes
  const generateQuestion = useCallback(() => {
    const generator = questionGenerator[skillType];
    if (!generator) {
      throw new Error(`Question generator for skill type "${skillType}" not found.`);
    }
    return generator();
  }, [skillType, questionGenerator]); 

  // Call generateQuestion on component mount and whenever skillType changes
  useEffect(() => {
    setCurrentQuestion(generateQuestion());
  }, [generateQuestion]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = userInput.trim() === currentQuestion.solution;
    const updatedScore = correct ? score + 1 : score;

    // Update this line to include 'matched' property
    setAnswers([
      ...answers,
      {
        ...currentQuestion,
        userInput: userInput.trim(),
        correct, // This can be kept if you are using it elsewhere
        matched: correct // Add this line so EndScreen can use it to display colors
      }
    ]);

    setScore(updatedScore);
    setUserInput('');
    setCurrentQuestion(generateQuestion()); // Generate the next question
};
const handleButtonInputSubmit = (inputString) => {
  // Similar logic as handleSubmit, but for button input
  const correct = inputString.trim() === currentQuestion.solution;
  const updatedScore = correct ? score + 1 : score;

  setAnswers([...answers, {
    ...currentQuestion,
    userInput: inputString.trim(),
    correct,
    matched: correct
  }]);

  setScore(updatedScore);
  setCurrentQuestion(generateQuestion()); // Generate the next question
  // No need to clear userInput as it's not used in button input mode
};


  // Make sure to render something different if there's no current question
  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Skill Practice</h1>

      <div className="d-flex justify-content-center mb-3">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <span style={{ marginRight: '10px' }}>Toggle Button Input:</span>
              <Switch
                onChange={() => setUseButtonInput(!useButtonInput)}
                checked={useButtonInput}
              />
            </label>
          </div>
        </div>

      <div className="mb-3 text-center">
        <TextDisplay text={currentQuestion.question} />

        {useButtonInput ? (
          <ButtonInput onSubmit={handleButtonInputSubmit} />
        ) : (
          <form onSubmit={handleSubmit} className="text-center mb-3">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              className="form-control text-center mb-2"
              style={{ maxWidth: '300px', margin: 'auto' }}
              autoFocus
            />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}

        <div className="text-center" style={{margin: '10px'}}>
          <button onClick={() => endPractice(score, answers)} className="btn btn-secondary">
            End Practice
          </button>
        </div>      
      </div>
    </div>
  );
};

export default SkillPracticeScreen;
