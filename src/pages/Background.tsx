import { useEffect, useRef, useState } from 'react';
import Education from '../components/background/Education';
import Experience from '../components/background/Experience';
import Lines from '../components/background/Lines';
import Title from '../components/common/Title';

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
      className="relative flex w-full h-full overflow-hidden bg-beige-300"
      ref={backgroundRef}
    >
      <Title text="background" />
      <Experience />
      <Education />
      <Lines
        backgroundWidth={backgroundWidth}
        backgroundHeight={backgroundHeight}
      />
    </div>
  );
}
