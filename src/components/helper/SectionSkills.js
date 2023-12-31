import React from 'react';
import TextDisplay from '../TextDisplay';

const SectionSkills = ({ sXskills,title, selectedSkill, onSkillChange, latex}) => {
    return (
      <fieldset className="p-3">
        <legend className="w-auto px-2">{title}</legend>
        <div className="d-flex flex-wrap justify-content-center">
          {sXskills.map((skill) => (
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
                  {latex ? <TextDisplay text={skill.label} /> : skill.label }
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    );
    
  };
  
  export default SectionSkills;