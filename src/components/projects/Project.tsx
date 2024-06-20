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
  pagetWidth: number;
  zIndex: number;
  idx: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

interface project {
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
  pagetWidth,
  zIndex,
  idx,
  setProjectList,
}: propTypes) {
  const projectBtnHandler = () => {
    if (idx === 0) {
    }

    if (idx !== 0) {
      setProjectList((prev) => {
        return [...prev.splice(idx, 1), ...prev];
      });
    }
  };
  return (
    <button
      style={{
        top: pageHeight * (0.3 + idx * 0.02) + 'px',
        left: pagetWidth * (0.3 - idx * 0.06) + 'px',
        zIndex: zIndex,
      }}
      className="absolute flex"
      onClick={projectBtnHandler}
    >
      <ProjectImg image={image} shadow={shadow} idx={idx} />
      {idx === 0 ? (
        <ProjectInfo
          title={title}
          typeAndTerm={typeAndTerm}
          intro={intro}
          skill={skill}
        />
      ) : null}
    </button>
  );
}
