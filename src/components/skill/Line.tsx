import { RefObject } from 'react';

interface propTypes {
  skillBoxCoor: {
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
  skillBoxCoor,
  skillRef,
  monitorCenterCoor,
}: propTypes) {
  const skillCenterCoor = {
    top: skillBoxCoor.top + skillRef.current?.offsetHeight / 2,
    left: skillBoxCoor.left + skillRef.current?.offsetWidth / 2,
  };

  const lineWidth = Math.sqrt(
    (skillCenterCoor.top - monitorCenterCoor.top) ** 2 +
      (skillCenterCoor.left - monitorCenterCoor.left) ** 2
  ).toFixed(0);

  const lineRotate =
    (Math.atan2(
      monitorCenterCoor.top - skillCenterCoor.top,
      monitorCenterCoor.left - skillCenterCoor.left
    ) *
      180) /
    Math.PI;

  return (
    <>
      <div
        style={{
          top: skillCenterCoor.top + 'px',
          left: skillCenterCoor.left + 'px',
          width: lineWidth + 'px',
          rotate: lineRotate + 'deg',
        }}
        className="bg-gray-400 w-1.5 h-1.5 absolute origin-[0%]"
      />
    </>
  );
}
