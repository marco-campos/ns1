// components/Section1aSkills.js

import React from 'react';

const s1dSkills = [
    { value: 'remainderBy2or4or8', label: 'Remainders when dividing by powers of 2' },
    { value: 'remainderBy3or9', label: 'Remainders when dividing by 9' },
    { value: 'remainderBy11', label: 'Remainders when dividing by 11' },
    { value: 'remainderBy6or12or18', label: 'Remainders when dividing by 6, 12, or 18' },
    { value: 'complexRemainderQuestion', label: 'Remainders of Expressions' },
]

const Section1dSkills = ({ selectedSkill, onSkillChange }) => {
console.log(selectedSkill)
return (
  <fieldset className="p-3">
    <legend className="w-auto px-2">Section 1a: Multiplication</legend>
    <div className="d-flex flex-wrap justify-content-center">
      {s1dSkills.map((skill) => (
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

export default Section1dSkills;