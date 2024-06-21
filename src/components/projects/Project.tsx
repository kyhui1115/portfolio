import { Dispatch, SetStateAction } from 'react';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';

interface propTypes {
  image: string;
  shadow: string;
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string;
  pageHeight: number;
  pageWidth: number;
  zIndex: number;
  idx: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export interface project {
  image: string;
  shadow: string;
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string;
}

export default function Project({
  image,
  shadow,
  title,
  typeAndTerm,
  intro,
  skill,
  pageHeight,
  pageWidth,
  zIndex,
  idx,
  setProjectList,
}: propTypes) {
  return (
    <div
      style={{
        top: pageHeight * (0.3 + idx * 0.02) + 'px',
        left: pageWidth * (0.3 - idx * 0.06) + 'px',
        zIndex: zIndex,
      }}
      className="absolute flex"
    >
      <ProjectImg
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
