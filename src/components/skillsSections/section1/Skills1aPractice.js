// components/SkillPracticeScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import TextDisplay from '../../TextDisplay';
import { foil2x2, foil2x3, foil3x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159 } from '../../utils/section1/section1a';

const SkillPracticeScreen = ({ endPractice, skillType }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Using useCallback to memoize the function so it doesn't change unless skillType changes
  const generateQuestion = useCallback(() => {
    switch (skillType) {
      case 'foil2x2':
        return foil2x2();
      case 'foil2x3':
        return foil2x3();
      case 'foil3x3':
        return foil3x3();
      case 'multiply11':
        return multiply11();
      case 'multiply111':
        return multiply111();
      case 'multiply101':
        return multiply101();
      case 'multiply25':
        return multiply25();
      case 'multiply75': 
        return multiply75();
      case 'multiplyNear100':
        return multiplyNear100();
      case 'squaresEnd5':
        return squaresEnd5();
      case 'squares4159':
        return squares4159();
      // Add more cases for other skills
      default:
        throw new Error(`Unknown skill type: ${skillType}`);
    }
  }, [skillType]);

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


  // Make sure to render something different if there's no current question
  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }

  return (
    <div>
      <h1>Skill Practice: {skillType}</h1>
      <div>
        <TextDisplay text={currentQuestion.question} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => endPractice(score, answers)}>End Practice</button>
      </div>
    </div>
  );
};

export default SkillPracticeScreen;
