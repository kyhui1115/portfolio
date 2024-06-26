import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Education from '../components/background/Education';
import Experience from '../components/background/Experience';
import Lines from '../components/background/Lines';

interface propTypes {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Background({ setCurrentPage }: propTypes) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  useEffect(() => {
    if (backgroundRef.current !== null) {
      setBackgroundWidth(backgroundRef.current?.offsetWidth);
      setBackgroundHeight(backgroundRef.current?.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage(3);
      }
    });

    if (sectionRef.current !== null) {
      observer.observe(sectionRef.current);
    }
  }, [setCurrentPage]);

  return (
    <div
      className="relative flex overflow-hidden h-[95vh] bg-beige-300 shrink-0"
      ref={backgroundRef}
    >
      <div ref={sectionRef} className="absolute top-[90%]" />
      <Experience />
      <Education />
      <Lines
        backgroundWidth={backgroundWidth}
        backgroundHeight={backgroundHeight}
      />
    </div>
  );
}
