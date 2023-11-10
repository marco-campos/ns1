// components/Section1aSkills.js

import React from 'react';

// Define the skills available in section 1a
const s1aSkills = [
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
    <fieldset className="p-3">
      <legend className="w-auto px-2">Section 1a: Multiplication</legend>
      <div className="d-flex flex-wrap justify-content-center">
        {s1aSkills.map((skill) => (
          <div key={skill.value} className="skill-option m-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="skill"
                id={`skill-${skill.value}`}
                value={skill.value}
                checked={selectedSkill === skill.value}
                onChange={onSkillChange}
              />
              <label className="form-check-label" htmlFor={`skill-${skill.value}`}>
                {skill.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
  
};

export default Section1aSkills;