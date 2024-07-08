import SkillItem from './SkillItem';

interface propTypes {
  skill: string[];
}

export default function Skill({ skill }: propTypes) {
  return (
    <div className="flex mt-1">
      {skill.map((text) => (
        <SkillItem key={text} text={text} />
      ))}
    </div>
  );
}
