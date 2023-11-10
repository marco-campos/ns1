// components/Section1aSkills.js

import React from 'react';

// Define the skills available in section 1a
const s2bSkills = [
  { value: 'squaresdecimal', label: 'Squares of Decimals' },
  { value: 'squaresPercentage', label: 'Percentage Squares' },
  { value: 'romanNumeral', label: 'Roman Numerals' },
];

const Section2bSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset>
      <legend>Section 2b: Memorization Applications</legend>
      <div className="skill-options">
        {s2bSkills.map((skill) => (
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

export default Section2bSkills;