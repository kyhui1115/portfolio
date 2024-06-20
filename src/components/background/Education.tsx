import { useRef } from 'react';
import SubTitle from './SubTitle';
import Term from './Term';
import Title from './Title';

export default function Education() {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute flex flex-col items-end pr-10 right-0 w-[40%] h-full justify-center"
      ref={divRef}
    >
      <Title text="education" />
      <SubTitle text="서원대학교 윤리교육과" />
      <Term term="2011. 03 ~ 2018. 02" />
    </div>
  );
}
