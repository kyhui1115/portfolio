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
}

export default function Project({
  id,
  image,
  shadow,
  title,
  typeAndTerm,
  intro,
  skill,
  zIndex,
  idx,
  setProjectList,
}: propTypes) {
  return (
    <div
      style={{
        zIndex: zIndex,
        top: 46 + idx * 20,
        left: 320 - idx * 90,
      }}
      className={`absolute flex`}
    >
      <ProjectImg
        id={id}
        image={image}
        shadow={shadow}
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
