// components/Section1aSkills.js

import React from 'react';
import TextDisplay from '../../TextDisplay';

const s1bSkills = [
    { value: 'factor1a', label: ['(na)^2 + a'] },
    { value: 'factor1b', label: ['a^2 + a'] },
    { value: 'commonfactorpm', label: 'Common Factor RPM' },
    { value: 'sumconsecutivesquares', label: 'Sum of Consecutive Squares' },
    { value: 'differenceSquares', label: 'Difference of Squares' },
]
  


const Section1bSkills = ({ selectedSkill, onSkillChange }) => {
  return (
    <fieldset className="p-3">
      <legend className="w-auto px-2">Section 1b: Factoring</legend>
      <div className="d-flex flex-wrap justify-content-center">
        {s1bSkills.map((skill) => (
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
                {Array.isArray(skill.label) ? (
                  <TextDisplay text={skill.label[0]} />
                ) : (
                  skill.label
                )}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
  
};

export default Section1bSkills;