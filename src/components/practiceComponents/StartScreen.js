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
    <div className="container py-5">
      <h1 className="text-center mb-4">Number Sense Practice</h1>
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">Practice Exam</h2>
          <p className="card-text">Mixed numbers should be typed as "a b/c" (Notice the space!) with "a" being the whole number and "b/c" being the fraction in reduced form. Improper fractions must be in reduced form.</p>
          <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="time-select" className="form-label">Choose a time limit:</label>
          <select id="time-select" className="form-select" value={timeOption} onChange={handleTimeChange}>
            <option value={60}>1 minute</option>
            <option value={300}>5 minutes</option>
            <option value={600}>10 minutes</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="question-select" className="form-label">Choose the number of questions:</label>
          <select id="question-select" className="form-select" value={questionOption} onChange={handleQuestionChange}>
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={15}>15 questions</option>
            <option value={20}>20 questions</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleStart}>Start Game</button>
      </form>
        </div>
      </div>

      
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Practice Skills</h2>
            <p>Pick a type of problem to practice on. There is no timer, just keep working problems and at the end you can see how you did.</p>
      
        <button className="btn btn-primary" onClick={handleSkillStart}>Start Practicing!</button>

        <div className="mb-3">
        <h3>Section 1: Basic Arithmetic Tricks</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Multiplication
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <Section1aSkills
                selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section1a');
                }}
              />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Factoring
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <Section1bSkills
                    selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                    onSkillChange={(e) => {
                        setSelectedSkill(e.target.value);
                        setCurrentSection('section1b');
                    }}
                />   
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Mixed Number Arithmetic
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <Section1cSkills
                  selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                  onSkillChange={(e) => {
                      setSelectedSkill(e.target.value);
                      setCurrentSection('section1c');
                  }}
              />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Remainder Tricks
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <Section1dSkills
                  selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                  onSkillChange={(e) => {
                      setSelectedSkill(e.target.value);
                      setCurrentSection('section1d');
                  }}
              />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className="mb-3">
        <h3>Section 2: Memorization</h3>
        <div class="accordion accordion-flush" id="accordionFlushP2">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Basic Memorization
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushP2">
              <div class="accordion-body">
              <Section2aSkills
                selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section2a');
                }}
              />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                Memorization Applications
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushP2">
              <div class="accordion-body">
              <Section2bSkills
                    selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                    onSkillChange={(e) => {
                        setSelectedSkill(e.target.value);
                        setCurrentSection('section2b');
                    }}
                />   
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Series
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushP2">
              <div class="accordion-body">
              <Section2cSkills
                  selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                  onSkillChange={(e) => {
                      setSelectedSkill(e.target.value);
                      setCurrentSection('section2c');
                  }}
              />
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="my-4">
        <h3>Coming Soon</h3>
        <h4>Memorization Applications</h4>
        <h4>Fibonacci Numbers</h4>
        <h4>Integral Divisors</h4>
        {/* ... upcoming sections ... */}
      </div>
      
    </div>
  );
};

export default StartScreen;