// components/Section1aSkills.js

import React from 'react';

// Define the skills available in section 1a
const s2cSkills = [
  { value: 'firstmInts', label: 'Sum of first n integers' },
  { value: 'firstmOdds', label: 'Sum of first n odd integers' },
  { value: 'firstmEvens', label: 'Sum of first n even integers' },
  { value: 'firstmSquares', label: 'Sum of first n squares' },
  { value: 'firstmCubes', label: 'Sum of first n cubes' },
  { value: 'arithmeticSeries', label: 'Arithmetic Series with common difference' },
//   { value: 'infGeoSeries', label: 'Infinite Geometric Series' },
];

const Section2cSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset>
      <legend>Section 2c: Series</legend>
      <div className="skill-options">
        {s2cSkills.map((skill) => (
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

export default Section2cSkills;