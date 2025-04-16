import React from 'react';
import './SkillItem.css';

const SkillItem = ({ skill }) => {
  const getProficiencyWidth = () => {
    switch(skill.proficiency) {
      case 'Beginner': return '30%';
      case 'Intermediate': return '60%';
      case 'Advanced': return '90%';
      default: return '50%';
    }
  };

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.proficiency}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: getProficiencyWidth() }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;