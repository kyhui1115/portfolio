import { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
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
  const [skillBoxCoor, setSkillBoxCoor] = useState({
    top: 0,
    left: 0,
  });

  const skillBoxMove = (e: MouseEvent) => {
    if (skillRef.current) {
      const mouseY = e.clientY - 40;
      const mouseX = e.clientX;

      if (
        skillBoxCoor.top > monitorCenterCoor.top + coor.top - 150 &&
        skillBoxCoor.top < monitorCenterCoor.top + coor.top + 150 &&
        skillBoxCoor.left > monitorCenterCoor.left + coor.left - 150 &&
        skillBoxCoor.left < monitorCenterCoor.left + coor.left + 150
      ) {
        setSkillBoxCoor({
          top:
            mouseY -
            skillRef.current.offsetHeight / 2 -
            (window.innerHeight * 0.95 - window.scrollY),
          left: mouseX - skillRef.current.offsetWidth / 2,
        });
      } else {
        setSkillBoxCoor({
          top: monitorCenterCoor.top + coor.top,
          left: monitorCenterCoor.left + coor.left,
        });
      }
    }
  };

  useEffect(() => {
    setSkillBoxCoor({
      top: monitorCenterCoor.top + coor.top,
      left: monitorCenterCoor.left + coor.left,
    });
  }, [monitorCenterCoor, coor]);

  return (
    <>
      <div
        className="absolute z-10 flex flex-col items-center w-48 bg-gray-500 cursor-default rounded-xl"
        style={{ top: skillBoxCoor.top + 'px', left: skillBoxCoor.left + 'px' }}
        ref={skillRef}
        onMouseMove={(e) => skillBoxMove(e)}
      >
        <span className="mt-2 mb-4 text-2xl font-bold text-yellow-100">
          {name}
        </span>
        {items.map((item, i) => (
          <Item key={i} name={item.name} icon={item.icon} />
        ))}
      </div>
      <Line
        skillBoxCoor={skillBoxCoor}
        monitorCenterCoor={monitorCenterCoor}
        skillRef={skillRef}
      />
    </>
  );
}
