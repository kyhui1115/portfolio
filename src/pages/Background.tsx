import { useEffect, useRef, useState } from 'react';
import Education from '../components/background/Education';
import Experience from '../components/background/Experience';
import Lines from '../components/background/Lines';

export default function Background() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  useEffect(() => {
    if (backgroundRef.current !== null) {
      setBackgroundWidth(backgroundRef.current?.offsetWidth);
      setBackgroundHeight(backgroundRef.current?.offsetHeight);
    }
  }, []);

  return (
    <div
      className="relative flex h-[95vh] overflow-hidden bg-beige-300 shrink-0"
      ref={backgroundRef}
    >
      <Experience />
      <Education />
      <Lines
        backgroundWidth={backgroundWidth}
        backgroundHeight={backgroundHeight}
      />
    </div>
  );
}
