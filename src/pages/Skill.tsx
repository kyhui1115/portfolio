import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import monitor from '../assets/monitor.svg';
import SkillList from '../components/skill/SkillList';

interface propTypes {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Skill({ setCurrentPage }: propTypes) {
  const [monitorCenterCoor, setMonitorCenterCoor] = useState({
    top: 0,
    left: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  console.log(skillRef.current?.offsetHeight);

  useEffect(() => {
    if (skillRef.current !== null) {
      setMonitorCenterCoor({
        top: skillRef.current?.offsetHeight / 2,
        left: skillRef.current?.offsetWidth / 2,
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage(1);
      }
    });

    if (sectionRef.current !== null) {
      observer.observe(sectionRef.current);
    }
  }, [setCurrentPage]);

  return (
    <div
      className="relative flex items-center justify-center h-[95vh] w-full bg-beige-300 shrink-0"
      ref={skillRef}
    >
      <div ref={sectionRef} className="absolute top-[70%]" />
      <img
        src={monitor}
        alt="monitor"
        className="absolute w-40 h-40"
        style={{
          top: monitorCenterCoor.top - 70,
          left: monitorCenterCoor.left - 80,
        }}
      />
      <SkillList monitorCenterCoor={monitorCenterCoor} />
    </div>
  );
}
