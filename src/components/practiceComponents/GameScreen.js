// components/GameScreen.js
import React, { useState, useEffect } from 'react';
import TextDisplay from '../TextDisplay';
import generateQuestionsWithSolutions from '../utils/generateQuestions'; // adjust the import path as necessary
import ButtonInput from './ButtonInput'; // Import the new component
import Switch from 'react-switch';

const GameScreen = ({ endGame, timeLimit, questionLimit, endPractice }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(timeLimit); // Assuming timeLimit is in minutes
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionsWithSolutions, setQuestionsWithSolutions] = useState([]);
  const [useButtonInput, setUseButtonInput] = useState(false); // New state variable for toggle


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

  useEffect(() => {
    if (questionCount < questionLimit && questionsWithSolutions.length > 0) {
      setCurrentQuestion(questionsWithSolutions[questionCount]);
    }
  }, [questionCount, questionLimit, questionsWithSolutions]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let matched = false;
  
    // Check if the solution is an array (i.e., there are multiple correct answers)
    if (Array.isArray(currentQuestion.solution)) {
      // If it is, check if the user input matches any of the correct answers
      matched = currentQuestion.solution.includes(userInput.trim());
    } else {
      // If it's not an array, proceed as before
      matched = userInput.trim() === currentQuestion.solution;
    }
  
    const updatedScore = matched ? score + 5 : score - 9;
    setAnswers([...answers, { ...currentQuestion, userInput: userInput.trim(), matched }]);
    setScore(updatedScore);
    setQuestionCount(prevCount => prevCount + 1);
    setUserInput(''); // Clear input field
  };

  const handleButtonInputSubmit = (inputString) => {
    // Directly handle the input string here, similar to how it's handled in handleSubmit
    let matched = false;
  
    if (Array.isArray(currentQuestion.solution)) {
      matched = currentQuestion.solution.includes(inputString.trim());
    } else {
      matched = inputString.trim() === currentQuestion.solution;
    }
  
    const updatedScore = matched ? score + 5 : score - 9;
    setAnswers([...answers, { ...currentQuestion, userInput: inputString.trim(), matched }]);
    console.log(answers);
    setScore(updatedScore);
    setQuestionCount(prevCount => prevCount + 1);
    setUserInput(''); // Clear input field
  };
  
  // ... rest of the GameScreen component
  

  const renderInputMethod = () => {
    if (useButtonInput) {
      return (
        <ButtonInput onSubmit={handleButtonInputSubmit}/>
      );
    } else {
      return (
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="form-control text-center mb-2"
          style={{ maxWidth: '300px', margin: 'auto' }}
          autoFocus
        />
      );
    }
  };
  

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Time Remaining: {`${Math.floor(timer / 60)}:${('0' + (timer % 60)).slice(-2)}`}</h2>      
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


      {currentQuestion.question && (
        <div className="mb-3 text-center">
        <TextDisplay text={currentQuestion.question}/>
      </div>
      
      )}

      <form onSubmit={handleSubmit} className="text-center mb-3">
        {renderInputMethod()}
        {!useButtonInput && (
          <button type="submit" className="btn btn-primary">
            Submit Answer
          </button>
        )}
      </form>
      <div className="text-center">
        <button onClick={() => endPractice(score, answers)} className="btn btn-secondary">
          End Practice
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
