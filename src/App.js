import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState('start'); // start, inGame, end
  const [timeLimit, setTimeLimit] = useState(600); // Default to 10 minutes
  const [questionLimit, setQuestionLimit] = useState(10); // Default to 10 questions
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const startGame = (selectedTime, selectedQuestions) => {
    setTimeLimit(selectedTime);
    setQuestionLimit(selectedQuestions);
    setGameState('inGame');
    // Reset score and answers
    setScore(0);
    setAnswers([]);
  };

  const endGame = (finalScore, finalAnswers) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    setGameState('end');
  };

  const goToHome = () => {
    setGameState('start');
  };

  switch (gameState) {
    case 'start':
      return <StartScreen startGame={startGame} />;
    case 'inGame':
      return (
        <GameScreen 
          endGame={endGame} 
          timeLimit={timeLimit} 
          questionLimit={questionLimit}
        />
      );
    case 'end':
      return (
        <EndScreen 
          score={score} 
          answers={answers} 
          startGame={() => startGame(timeLimit, questionLimit)} 
          goToHome={goToHome} 
        />
      );
    default:
      return <div>Unknown state</div>;
  }
}

export default App;
