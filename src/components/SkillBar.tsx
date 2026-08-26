import type { Skill } from '../types';

interface Props {
  skill: Skill;
}

export default function SkillBar({ skill }: Props) {
  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  );
}
