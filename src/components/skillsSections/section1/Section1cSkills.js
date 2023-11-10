// components/Section1aSkills.js

import React from 'react';
import TextDisplay from '../../TextDisplay';

const s1cSkills = [
    { value: 'mixedFoil1', label: 'Mixed Number Arithmetic' },
    { value: 'axaOverb', label: 'a \\times \\frac{a}{b}' },
    { value: 'a_bPlusb_a', label: '\\frac{a}{b} + \\frac{b}{a}' },
    { value: 'a_bMinusNfrac1', label: '\\frac{a}{b} - \\frac{na-1}{nb+1}' },
    { value: 'a_bMinusNfrac2', label: '\\frac{a}{b} - \\frac{na+1}{nb-1}' },
]

const Section1cSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset>
      <legend>Section 1c: Mixed Number Arithmetic</legend>
      <div className="skill-options">
        {s1cSkills.map((skill) => (
          <div key={skill.value} className="skill-option">
            <label>
              <input
                type="radio"
                name="skill"
                value={skill.value}
                checked={selectedSkill === skill.value}
                onChange={onSkillChange}
              />
              {(skill.value !== 'mixedFoil1') ? 
              <TextDisplay text={skill.label}/> 
              : skill.label
            }
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Section1cSkills;