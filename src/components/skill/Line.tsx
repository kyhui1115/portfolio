import { RefObject } from 'react';

interface propTypes {
  skillCoor: {
    top: number;
    left: number;
  };
  monitorCenterCoor: {
    top: number;
    left: number;
  };
  skillRef: RefObject<any>;
}

export default function Line({
  skillCoor,
  skillRef,
  monitorCenterCoor,
}: propTypes) {
  const SkillCenterCoor = {
    top: skillCoor.top + skillRef.current?.offsetHeight / 2,
    left: skillCoor.left + skillRef.current?.offsetWidth / 2,
  };

  const lineWidth = Math.sqrt(
    (SkillCenterCoor.top - monitorCenterCoor.top) ** 2 +
      (SkillCenterCoor.left - monitorCenterCoor.left) ** 2
  ).toFixed(0);

  const lineRotate =
    (Math.atan2(
      monitorCenterCoor.top - SkillCenterCoor.top,
      monitorCenterCoor.left - SkillCenterCoor.left
    ) *
      180) /
    Math.PI;

  return (
    <>
      <div
        style={{
          top: SkillCenterCoor.top + 'px',
          left: SkillCenterCoor.left + 'px',
          width: lineWidth + 'px',
          rotate: lineRotate + 'deg',
        }}
        className="bg-gray-400 w-1.5 h-1.5 absolute origin-[0%]"
      />
    </>
  );
}
