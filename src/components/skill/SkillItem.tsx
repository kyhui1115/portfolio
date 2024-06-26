import { ReactElement, useRef } from 'react';
import Item from './Item';
import Line from './Line';

interface propTypes {
  name: string;
  coor: {
    top: number;
    left: number;
  };
  items: item[];
  monitorCenterCoor: {
    top: number;
    left: number;
  };
}

interface item {
  name: string;
  icon: ReactElement;
}

export default function SkillItem({
  name,
  items,
  coor,
  monitorCenterCoor,
}: propTypes) {
  const skillRef = useRef<HTMLDivElement>(null);

  const skillCoor = {
    top: monitorCenterCoor.top + coor.top,
    left: monitorCenterCoor.left + coor.left,
  };

  return (
    <>
      <div
        className="absolute z-10 flex flex-col items-center w-48 bg-gray-500 rounded-xl"
        style={{ top: skillCoor.top + 'px', left: skillCoor.left + 'px' }}
        ref={skillRef}
      >
        <span className="mt-2 mb-4 text-2xl font-bold text-red-100">
          {name}
        </span>
        {items.map((item, i) => (
          <Item key={i} name={item.name} icon={item.icon} />
        ))}
      </div>
      <Line
        skillCoor={skillCoor}
        monitorCenterCoor={monitorCenterCoor}
        skillRef={skillRef}
      />
    </>
  );
}
