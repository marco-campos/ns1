import React, { useState } from 'react';
import StartScreen from './practiceComponents/StartScreen';
import GameScreen from './practiceComponents/GameScreen';
import EndScreen from './practiceComponents/EndScreen';
import SkillPracticeScreen from './practiceComponents/SkillPracticeScreen';

function PracticePage() {
  const [gameState, setGameState] = useState('start');
  const [timeLimit, setTimeLimit] = useState(600);
  const [questionLimit, setQuestionLimit] = useState(10);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skillType, setSkillType] = useState('');
  const [questionGenerator, setQuestionGenerator] = useState({});

  const startSkillPractice = (skillType, generatorObject) => {
    setSkillType(skillType);
    setGameState('inSkillPractice');
    // Determine and set the appropriate question generator based on the skill type
    const generator = generatorObject
    setQuestionGenerator(generator);
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
      return <GameScreen endGame={endGame} timeLimit={timeLimit} questionLimit={questionLimit} />;
    case 'inSkillPractice':
      return <SkillPracticeScreen endPractice={endGame} skillType={skillType} questionGenerator={questionGenerator} />;
    case 'end':
      return <EndScreen score={score} answers={answers} startGame={() => startGame(timeLimit, questionLimit)} goToHome={goToHome} />;
    default:
      return <div>Unknown state</div>;
  }
}

export default PracticePage;
