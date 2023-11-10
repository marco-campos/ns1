// components/Section1aSkills.js

import React from 'react';

// Define the skills available in section 1a
const s2aSkills = [
  { value: 'squares', label: 'Squares' },
  { value: 'squareRoot', label: 'Square Roots' },
  { value: 'cubes', label: 'Cubes' },
  { value: 'cubeRoot', label: 'Cube Roots' },
];

const Section2aSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset className="p-3">
      <legend className="w-auto px-2">Section 1a: Multiplication</legend>
      <div className="d-flex flex-wrap justify-content-center">
        {s2aSkills.map((skill) => (
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

export default Section2aSkills;