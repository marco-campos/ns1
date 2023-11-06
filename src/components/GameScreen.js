// components/GameScreen.js
import React, { useState, useEffect } from 'react';
import TextDisplay from './TextDisplay';
import generateQuestionsWithSolutions from './utils/generateQuestions'; // adjust the import path as necessary

const GameScreen = ({ endGame, timeLimit, questionLimit }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(timeLimit * 60); // Assuming timeLimit is in minutes
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionsWithSolutions, setQuestionsWithSolutions] = useState([]);

  // Generate questions on component mount
  useEffect(() => {
    setQuestionsWithSolutions(generateQuestionsWithSolutions(questionLimit));
  }, [questionLimit]);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (timer > 0 && questionCount < questionLimit) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      endGame(score, answers);
    }
    return () => clearInterval(interval);
  }, [timer, questionCount, questionLimit, endGame, score, answers]);

  // Random question logic, updated to work with generated questions
  useEffect(() => {
    if (questionCount < questionLimit && questionsWithSolutions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questionsWithSolutions.length);
      setCurrentQuestion(questionsWithSolutions[randomIndex]);
    }
  }, [questionCount, questionLimit, questionsWithSolutions]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checking match")
    console.log(userInput)
    console.log(currentQuestion.solution)
    const matched = userInput.trim() === currentQuestion.solution
    const updatedScore = matched ? score + 5 : score - 7;
    setAnswers([...answers, { ...currentQuestion, userInput: userInput.trim(), matched }]);
    setScore(updatedScore);
    setQuestionCount(prevCount => prevCount + 1);
    setUserInput(''); // Clear input field
  };

  return (
    <div>
      <h2>Time Remaining: {`${Math.floor(timer / 60)}:${('0' + (timer % 60)).slice(-2)}`}</h2>
      {currentQuestion.question && (
        <div>
          {/* Render the LaTeX question here */}
          <TextDisplay text={currentQuestion.question} />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} autoFocus />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default GameScreen;
