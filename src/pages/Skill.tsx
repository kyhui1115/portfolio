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
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      setMonitorCenterCoor({
        top: pageRef.current?.offsetHeight / 2,
        left: pageRef.current?.offsetWidth / 2,
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
      className="relative h-[95vh] w-full bg-beige-300 shrink-0"
      ref={pageRef}
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
