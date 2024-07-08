import Intro from './Intro';
import Review from './Review';
import Skill from './Skill';
import Title from './Title';
import TypeAndTerm from './TypeAndTerm';

interface propTypes {
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string[];
  review: string;
}

export default function ProjectInfo({
  title,
  typeAndTerm,
  intro,
  skill,
  review,
}: propTypes) {
  return (
    <div className="flex flex-col items-start mt-10 -ml-16 animate-scale w-140">
      <div className="flex">
        <Title title={title} />
        <TypeAndTerm typeAndTerm={typeAndTerm} />
      </div>
      <Skill skill={skill} />
      <Intro intro={intro} />
      <Review review={review} />
    </div>
  );
}
