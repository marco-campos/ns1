import React, { useState } from 'react';

import PracticeAccordionSection from '../helper/PracticeAccordionSection';
import SectionSkills from '../helper/SectionSkills';
import {determineGeneratorObject} from '../utils/generateQuestions'

import { s1aSkills } from '../utils/section1/section1a';
import { s1bSkills } from '../utils/section1/section1b'
import { s1cSkills } from '../utils/section1/section1c';
import { s1dSkills } from '../utils/section1/section1d';
import { s1eSkills } from '../utils/section1/section1e'

import { s2aSkills } from '../utils/section2/section2a';
import { s2bSkills } from '../utils/section2/section2b';
import { s2cSkills } from '../utils/section2/section2c';

import {s3aSkills} from '../utils/section3/section3a'
import {s3bSkills} from '../utils/section3/section3b'
import {s3cSkills} from '../utils/section3/section3c'
import { s3dSkills } from '../utils/section3/section3d';

import {s4aSkills} from '../utils/section4/section4a'



const StartScreen = ({ startGame, startSkillPractice }) => {
  const [timeOption, setTimeOption] = useState(600); // Default 10 minutes
  const [questionOption, setQuestionOption] = useState(10); // Default 10 questions
  const [selectedSkill, setSelectedSkill] = useState('foil2x2'); // For skill practice, singular
  const [currentSection, setCurrentSection] = useState('section1a');

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
          <p className="card-text">Pick the desired length of time as well as how many questions you want to practice on. We will generate random questions from the list in the Practice section. Your score will be calulated as follows:</p>
          <ul>
            <li>+5 points for every question that is correct</li>
            <li>-9 points for every question that is incorrect or skipped</li>
          </ul>
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
        <button type="button" className="btn btn-primary" onClick={handleStart}>Start Exam</button>
      </form>
        </div>
      </div>

      
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Practice Skills</h2>
            <p>Pick a type of problem to practice on. There is no timer, just keep working problems and at the end you can see how you did.</p>
            <p>The default option is to practice multiplication of two 2-digit numbers using the FOIL technique.</p>
            <button className="btn btn-primary mb-4" onClick={handleSkillStart}>Start Practicing!</button>

        <div className="mb-3">
          <h3>Section 1: Basic Arithmetic Tricks</h3>
          <div class="accordion accordion-flush" id="accordionFlushExample">
        
            <PracticeAccordionSection 
              title={'Multiplication'} section={"1"} index={"1"}
              content={<SectionSkills
                sXskills={s1aSkills} title={'Section 1a: Multiplication Tricks'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section1a');
                }}/>}
            />

            <PracticeAccordionSection 
              title={"Factoring"} section={"1"} index={"2"}
              content={<SectionSkills
                sXskills={s1bSkills} title={'Section 1b: Factoring'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setCurrentSection('section1b');
                }}/>}
            />

            <PracticeAccordionSection 
              title={"Mixed Number Arithmetic"} section={"1"} index={"3"}
              content={<SectionSkills
                sXskills={s1cSkills} title={'Section 1c: Mixed Numbers and Fractions'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setCurrentSection('section1c');
                }}/>}
            />
          
            <PracticeAccordionSection 
              title={"Remainder Tricks"} section={"1"} index={"4"}
              content={<SectionSkills
                sXskills={s1dSkills} title={'Section 1d: Remainder Tricks'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setCurrentSection('section1d');
                }}/>}
            />
            <PracticeAccordionSection 
              title={"GCD and LCM Problems"} section={"1"} index={"5"}
              content={<SectionSkills 
                sXskills={s1eSkills} title={'Section 1e: GCD and LCM Problems'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section1e');
              }}
              />}
            />

          </div>
        </div>
        
        <div className="mb-3">
        <h3>Section 2: Memorization</h3>
          <div class="accordion accordion-flush" id="accordionFlushP2">

            <PracticeAccordionSection 
              title={"Basic Memorization"} section={"2"} index={"6"}
              content={<SectionSkills
                sXskills={s2aSkills} title={'Section 2a: Memorization'}selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section2a');
                }}/>}
            />

            <PracticeAccordionSection 
              title={"Memorization Applications"} section={"2"} index={"7"}
              content={<SectionSkills
                sXskills={s2bSkills} title={'Section 2b: Memorization Applications'} selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                onSkillChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setCurrentSection('section2b');
                }}/>}
            />

            <PracticeAccordionSection 
              title={"Series"} section={"2"} index={"8"}
              content={<SectionSkills
                sXskills={s2cSkills} title={'Section 2c: Summation Formulas'} selectedSkill={selectedSkill} // Note the prop name change to reflect singular skill
                onSkillChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setCurrentSection('section2c');
                }} />}
            />

          </div>
        </div>


        {/* Section 3 */}

        <div className="mb-3">
          <h3>Section 3: Algebra + Geometry</h3>
          <div class="accordion accordion-flush" id="accordionFlushP3">

            <PracticeAccordionSection 
              title={"Repeating Decimal Tricks"} section={"3"} index={"9"}
              content={<SectionSkills 
                sXskills={s3aSkills}
                title={'Section 3a: Sum and Product of Roots of Polynomials'}
                selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section3a');
              }}/>}
            />

            <PracticeAccordionSection 
              title={"Questions on Divisors"} section={"3"} index={"10"}
              content={<SectionSkills
                sXskills={s3bSkills} title={'Section 3b: Divisor tricks'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section3b');
              }}/>}
            />

            <PracticeAccordionSection 
              title={"Questions about Polynomials"} section={"3"} index={"11"}
              content={<SectionSkills
                sXskills={s3cSkills} title={'Section 3c: Polynomial tricks'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section3c');
              }}/>}
            />      

            <PracticeAccordionSection 
              title={"Combinations and Permutations"} section={"3"} index={"12"}
              content={<SectionSkills
                sXskills={s3dSkills} title={'Section 3d: Calculating Combinations and Permutations'} selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section3d');
              }}/>}
            />   

          </div>
        </div>

      {/* Section 4 */}

        <div className="mb-3">
          <h3>Section 4: Precalculus + Misc Topics</h3>
          <div class="accordion accordion-flush" id="accordionFlushP4">
            <PracticeAccordionSection
              title={"Change of Bases"} section={"4"} index={"13"}
              content={<SectionSkills 
                sXskills={s4aSkills}
                title={'Section 4a: Change of Bases'}
                selectedSkill={selectedSkill}
                onSkillChange={(e) => {
                  setSelectedSkill(e.target.value);
                  setCurrentSection('section4a');
              }}/>}
            />            
          </div>
        </div>
        
      </div>
    </div>
      <div className="my-4">
        <h3>Coming Soon!</h3>
        <ul>
          <li>Conversion Problems (distance, velocity, area, volume, fluid, weight)</li>
          <li>fibonacci tricks/memorization tips</li>
          <li>More integral divisor problems</li>
          <li>Trig values</li>
          <li>Trig formulas</li>
          <li>Sets</li>
          <li>Arithmetic with changes of bases</li>
        </ul>
        {/* ... upcoming sections ... */}
      </div>

      <div className="my-4">
        <h3>Requests, Bug Fixes, Questions? Post on the discord!</h3>
      </div>

      
    </div>
  );
};

export default StartScreen;
