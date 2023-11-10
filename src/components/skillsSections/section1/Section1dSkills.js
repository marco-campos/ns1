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
    <fieldset>
      <legend>Section 1d: Remainder Tricks</legend>
      <div className="skill-options">
        {s1dSkills.map((skill) => (
          <div key={skill.value} className="skill-option">
            <label>
              <input
                type="radio"
                name="skill"
                value={skill.value}
                checked={selectedSkill === skill.value}
                onChange={onSkillChange}
              />
              {skill.label }
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Section1dSkills;