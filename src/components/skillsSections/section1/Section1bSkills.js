// components/Section1aSkills.js

import React from 'react';

const s1bSkills = [
    { value: 'factor1a', label: 'Factoring Practice (na)^2 + a' },
    { value: 'factor1b', label: 'Factoring Practice a^2 + a' },
    { value: 'commonfactorpm', label: 'Common Factor RPM' },
    { value: 'sumconsecutivesquares', label: 'Sum of Consecutive Squares' },
    { value: 'differenceSquares', label: 'Difference of Squares' },
]
  


const Section1bSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset>
      <legend>Section 1b: Factoring</legend>
      <div className="skill-options">
        {s1bSkills.map((skill) => (
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

export default Section1bSkills;