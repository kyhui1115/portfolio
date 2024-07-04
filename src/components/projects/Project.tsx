import { Dispatch, SetStateAction } from 'react';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';

interface propTypes {
  id: number;
  image: string;
  shadow: string;
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string;
  review: string;
  zIndex: number;
  idx: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export interface project {
  id: number;
  image: string;
  shadow: string;
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string;
  review: string;
}

export default function Project({
  id,
  image,
  shadow,
  title,
  typeAndTerm,
  intro,
  skill,
  review,
  zIndex,
  idx,
  setProjectList,
}: propTypes) {
  const transitionStyles = {
    top: 65 + idx * 20 + 'px',
    left: 300 - idx * (120 - idx * 20) + 'px',
    transition: 'top 1000ms, left 1000ms',
  };

  return (
    <div
      style={{
        zIndex: zIndex,
        ...transitionStyles,
      }}
      className={`absolute flex`}
    >
      <ProjectImg
        id={id}
        image={image}
        shadow={shadow}
        review={review}
        idx={idx}
        setProjectList={setProjectList}
      />
      {idx === 0 ? (
        <ProjectInfo
          title={title}
          typeAndTerm={typeAndTerm}
          intro={intro}
          skill={skill}
        />
      ) : null}
    </div>
  );
}
