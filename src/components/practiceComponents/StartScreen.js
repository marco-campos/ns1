// components/StartScreen.js
import React, { useState } from 'react';
import Section1aSkills from '../skillsSections/section1/Section1aSkills';
import Section1bSkills from '../skillsSections/section1/Section1bSkills';
import Section1cSkills from '../skillsSections/section1/Section1cSkills'
import Section1dSkills from '../skillsSections/section1/Section1dSkills'

import Section2aSkills from '../skillsSections/section2/Section2aSkills'
import Section2bSkills from '../skillsSections/section2/Section2bSkills'
import Section2cSkills from '../skillsSections/section2/Section2cSkills'


import {determineGeneratorObject} from '../utils/generateQuestions'

const StartScreen = ({ startGame, startSkillPractice }) => {
  const [timeOption, setTimeOption] = useState(600); // Default 10 minutes
  const [questionOption, setQuestionOption] = useState(10); // Default 10 questions
  const [selectedSkill, setSelectedSkill] = useState(''); // For skill practice, singular
  const [currentSection, setCurrentSection] = useState(null);

  const handleTimeChange = (event) => {
    setTimeOption(parseInt(event.target.value, 10));
  };

  const handleQuestionChange = (event) => {
    setQuestionOption(parseInt(event.target.value, 10));
  };

  const handleStart = () => {
    // Pass the selected options to start the game
    startGame(timeOption, questionOption);
  };

  const handleSkillStart = () => {
    if(selectedSkill) {
      const generatorObject = determineGeneratorObject(currentSection);
      startSkillPractice(selectedSkill, generatorObject);
    } else {
      alert("Please select at least one skill to practice.");
    }
  };
  
  return (
    <div>
      <h1>Number Sense Practice</h1>
      <div>
        <h2>Practice Exam</h2>
        <p>Take an exam with random questions from the available skills bellow. Your score will be calculated at the end with +5 points for every correct answer and -7 points for every incorrect or skipped question.</p>
        <p>Note: Some questions require you to answer with either a mixed number or improper fraction.</p>
        <p>Mixed numbers should be typed as "a b/c" (Notice the space!) with "a" being the whole number and "b/c" being the fraction in reduced form. Improper fractions must be in reduced form.</p>
        <div>
          <label htmlFor="time-select">Choose a time limit:</label>
          <select id="time-select" value={timeOption} onChange={handleTimeChange}>
            <option value={60}>1 minute</option>
            <option value={300}>5 minutes</option>
            <option value={600}>10 minutes</option>
          </select>
        </div>
        <div>
          <label htmlFor="question-select">Choose the number of questions:</label>
          <select id="question-select" value={questionOption} onChange={handleQuestionChange}>
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={15}>15 questions</option>
            <option value={20}>20 questions</option>
          </select>
        </div>
        <button onClick={handleStart}>Start Game</button>
      </div>
      <div>
        <h2>Practice Skills</h2>
        <p>Pick a type of problem to practice on. There is no timer, just keep working problems and at the end you can see how you did.</p>
        <h3>Section 1: Basic Arithmetic Tricks</h3>
        <button onClick={handleSkillStart}>Start Multiplication Practice</button>
        {/* Section1aSkills handles its own skill selection */}
        <Section1aSkills
          selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
          onSkillChange={(e) => {
            setSelectedSkill(e.target.value);
            setCurrentSection('section1a');
          }}
        />
        <button onClick={handleSkillStart}>Start Factoring Practice</button>
        <Section1bSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section1b');
            }}
        />
        <button onClick={handleSkillStart}>Start Mixed Number Practice</button>
        <Section1cSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section1c');
            }}
        />
        <button onClick={handleSkillStart}>Start Remainders Practice</button>
        <Section1dSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section1d');
            }}
        />
        {/* ... other sections ... */}
        <h3>Section 2: Memorization</h3>

        <button onClick={handleSkillStart}>Start Remainders Practice</button>
        <Section2aSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section2a');
            }}
        />

        <button onClick={handleSkillStart}>Start Remainders Practice</button>
        <Section2bSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section2b');
            }}
        />

        <button onClick={handleSkillStart}>Start Remainders Practice</button>
        <Section2cSkills
            selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
            onSkillChange={(e) => {
                setSelectedSkill(e.target.value);
                setCurrentSection('section2c');
            }}
        />
        <h3>Coming Soon</h3>
        <h4>Memorization Applications</h4>
        {/* ... upcoming sections ... */}
      </div>
    </div>
  );
};

export default StartScreen;
