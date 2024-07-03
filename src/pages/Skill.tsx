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
  const monitorRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (monitorRef.current !== null) {
      setMonitorCenterCoor({
        top:
          monitorRef.current?.offsetTop -
          16 +
          monitorRef.current?.offsetHeight / 2,
        left:
          monitorRef.current?.offsetLeft + monitorRef.current?.offsetWidth / 2,
      });
    }
  }, [monitorRef]);

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
    <div className="relative flex items-center justify-center h-[95vh] bg-beige-300 shrink-0">
      <div ref={sectionRef} className="absolute top-[70%]" />
      <img src={monitor} alt="monitor" className="w-40 h-40" ref={monitorRef} />
      <SkillList monitorCenterCoor={monitorCenterCoor} />
    </div>
  );
}
