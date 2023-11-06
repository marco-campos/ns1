// components/QuestionGen.js
import React, { useState, useEffect } from 'react';import TextDisplay from './TextDisplay';

// Example question bank, replace this with your actual LaTeX strings
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

  const QuestionGen = ({ currentIndex, questionLimit }) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
  
    useEffect(() => {
      if (currentIndex < questionLimit) {
        const randomIndex = Math.floor(Math.random() * questionsWithSolutions.length);
        setCurrentQuestion(questionsWithSolutions[randomIndex]);
      }
    }, [currentIndex, questionLimit]);
  
    return (
      <div>
        {/* Ensure that the currentQuestion exists before trying to render TextDisplay */}
        {currentQuestion && <TextDisplay text={currentQuestion.question} />}
      </div>
    );
  };
  
  export default QuestionGen;
