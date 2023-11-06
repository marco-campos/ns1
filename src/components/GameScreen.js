// components/GameScreen.js
import React, { useState, useEffect } from 'react';
import TextDisplay from './TextDisplay';

// Assuming your questions are an array of objects with `question` (LaTeX string) and `solution` fields
const questionsWithSolutions = [
  {
    question: "3+2",
    solution: "5",
  },
  {
    question: "\\sqrt{4}",
    solution: "2",
  },
  // ... more questions and solutions
];

const GameScreen = ({ endGame, timeLimit, questionLimit }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(timeLimit);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Timer logic
  useEffect(() => {
    if (timer > 0 && questionCount < questionLimit) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      endGame(score, answers);
    }
  }, [timer, questionCount, questionLimit, endGame, score, answers]);

  // Random question logic
  useEffect(() => {
    if (questionCount < questionLimit) {
      const randomIndex = Math.floor(Math.random() * questionsWithSolutions.length);
      setCurrentQuestion(questionsWithSolutions[randomIndex]);
    }
  }, [questionCount, questionLimit]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = userInput.trim().toLowerCase() === currentQuestion.solution.toLowerCase();
    const updatedScore = matched ? score + 5 : score - 7;
    setAnswers([...answers, { ...currentQuestion, userInput: userInput.trim(), matched }]);
    setScore(updatedScore);
    setQuestionCount(prevCount => prevCount + 1);
    setUserInput(''); // Clear input field
  };

  return (
    <div>
      <h2>Time Remaining: {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}</h2>
      <div>
        {/* Render the LaTeX question here */}
        <TextDisplay text={currentQuestion.question || ''} />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} autoFocus />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default GameScreen;
