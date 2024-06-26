import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import IntroduceBody from '../components/introduce/IntroduceBody';
import IntroduceTitle from '../components/introduce/IntroduceTitle';

interface propTypes {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Introduce({ setCurrentPage }: propTypes) {
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
      <IntroduceTitle />
      <IntroduceBody />
    </div>
  );
}
