import Title from '../components/common/Title';
import monitor from '../assets/monitor.svg';
import SkillList from '../components/skill/SkillList';
import { useEffect, useRef, useState } from 'react';

export default function Skill() {
  const [monitorCenterCoor, setMonitorCenterCoor] = useState({
    top: 0,
    left: 0,
  });
  const monitorRef = useRef<HTMLImageElement>(null);

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
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-beige-300 shrink-0">
      <img src={monitor} alt="monitor" className="w-40 h-40" ref={monitorRef} />
      <SkillList monitorCenterCoor={monitorCenterCoor} />
    </div>
  );
}
