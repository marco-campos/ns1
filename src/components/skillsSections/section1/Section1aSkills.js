// components/Section1aSkills.js

import React from 'react';

// Define the skills available in section 1a
const section1aSkills = [
  { value: 'foil2x2', label: 'Foil 2x2' },
  { value: 'foil2x3', label: 'Foil 2x3' },
  { value: 'foil3x3', label: 'Foil 3x3' },
  { value: 'multiply11', label: 'Multiply by 11' },
  { value: 'multiply111', label: 'Multiply by 111' },
  { value: 'multiply101', label: 'Multiply by 101'},
  { value: 'multiply25', label: 'Multiply by 25'},
  { value: 'multiply75', label: 'Multiply by 75'},
  { value: 'multiplyNear100', label: 'Multiply two numbers near 100'},
  { value: 'squaresEnd5', label: 'Squares ending in 5'},
  { value: 'squares4159', label: 'Squares between 41 and 59'}
];


const Section1aSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset>
      <legend>Section 1a: Multiplication</legend>
      <div className="skill-options">
        {section1aSkills.map((skill) => (
          <div key={skill.value} className="skill-option">
            <label>
              <input
                type="radio"
                name="skill"
                value={skill.value}
                checked={selectedSkill === skill.value}
                onChange={onSkillChange}
              />
              {skill.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Section1aSkills;