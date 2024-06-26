import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import AboutMeBody from '../components/AboutMe/AboutMeBody';
import AboutMeTitle from '../components/AboutMe/AboutMeTitle';

interface propTypes {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function AboutMe({ setCurrentPage }: propTypes) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage(0);
      }
    });

    if (sectionRef.current !== null) {
      observer.observe(sectionRef.current);
    }
  }, [setCurrentPage]);
  return (
    <div className="relative flex flex-col h-[95vh] bg-gray-500 shrink-0">
      <div ref={sectionRef} className="absolute top-[90%]" />
      <AboutMeTitle />
      <AboutMeBody />
    </div>
  );
}
