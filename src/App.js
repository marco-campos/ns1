import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import SkillPracticeScreen from './components/SkillPracticeScreen'; // You need to create this component


function App() {
  const [gameState, setGameState] = useState('start'); // start, inGame, end
  const [timeLimit, setTimeLimit] = useState(600); // Default to 10 minutes
  const [questionLimit, setQuestionLimit] = useState(10); // Default to 10 questions
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);


  const startSkillPractice = (skills) => {
    setSelectedSkills(skills);
    setGameState('inSkillPractice');
    // Reset score and answers for skill practice
    setScore(0);
    setAnswers([]);
  };

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
      return <StartScreen startGame={startGame} startSkillPractice={startSkillPractice} />;
    case 'inGame':
      return (
        <GameScreen 
          endGame={endGame} 
          timeLimit={timeLimit} 
          questionLimit={questionLimit}
        />
      );
      case 'inSkillPractice':
        // Make sure only one skill type is passed to the SkillPracticeScreen
        // This assumes selectedSkills contains at least one skill.
        const skillToPractice = selectedSkills; // Take the first skill for practice

        return (
          <SkillPracticeScreen 
            endPractice={endGame} // Assuming you have an endPractice function that should be here
            skillType={skillToPractice}
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
