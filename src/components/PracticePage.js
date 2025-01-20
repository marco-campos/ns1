import React, { useState, useEffect } from 'react';
import {supabase} from "../config"
import StartScreen from './practiceComponents/StartScreen';
import GameScreen from './practiceComponents/GameScreen';
import EndScreen from './practiceComponents/EndScreen';
import SkillPracticeScreen from './practiceComponents/SkillPracticeScreen';

function PracticePage() {
  const [highScore, setHighScore] = useState(null);
  const [gameState, setGameState] = useState('start');
  const [timeLimit, setTimeLimit] = useState(600);
  const [questionLimit, setQuestionLimit] = useState(10);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skillType, setSkillType] = useState('');
  const [questionGenerator, setQuestionGenerator] = useState({});
  
  const updateHighScore = async (newHighScore) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      console.log("updateHighScore called in PracticePage.js");
      const { error } = await supabase
        .from('users')
        .update({ high_score: newHighScore })
        .eq('uuid', user.id);
      
      if (error) {
        console.error('Error updating user data:', error);
      }
    }
  };

  const fecthUserHighScore = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      console.log("fetchUserHighScore in PracticePage.js is called, " + user.user_metadata.full_name + " is signed in with id: " + user.id);
      const { data, error } = await supabase
        .from('users')
        .select('high_score')
        .eq('uuid', user.id)
        .single();
      
      if (error) {
        console.error('Error fetching user data:', error);
      } else if (data) {
        setHighScore(data.high_score);
        console.log(user.user_metadata.full_name+ "'s current High score is: " + data.high_score);
      }
    }
  };

  useEffect(() => {
    console.log("PracticPage mounts");
    fecthUserHighScore();
  }, [fecthUserHighScore]);


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
    // console.log("answers: ");
    // console.log(finalAnswers);
    setGameState('inGame');
    // Reset score and answers
    setScore(0);
    setAnswers([]);
  };

  const endGame = (finalScore, finalAnswers) => {
    setScore(finalScore);
    // setHighScore(Math.max(highScore, finalScore));
    if (finalScore > highScore) {
      console.log("New high score: " + finalScore);
      updateHighScore(finalScore);
      setHighScore(finalScore);
    }
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
      return <GameScreen endPractice={endGame} endGame={endGame} timeLimit={timeLimit} questionLimit={questionLimit} />;
    case 'inSkillPractice':
      return <SkillPracticeScreen endPractice={endGame} skillType={skillType} questionGenerator={questionGenerator} />;
    case 'end':
      return <EndScreen score={score} answers={answers} startGame={() => startGame(timeLimit, questionLimit)} goToHome={goToHome} />;
    default:
      return <div>Unknown state</div>;
  }
}

export default PracticePage;
