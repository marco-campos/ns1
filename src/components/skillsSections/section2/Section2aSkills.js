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
    <fieldset>
      <legend>Section 2a: Basic Memorization</legend>
      <div className="skill-options">
        {s2aSkills.map((skill) => (
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

export default Section2aSkills;