import { Dispatch, SetStateAction } from 'react';
import { project } from './Project';
import Shadow from './Shadow';
import MainImg from './MainImg';

interface propTypes {
  id: number;
  image: string;
  shadow: string;
  idx: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function ProjectImg({
  id,
  image,
  shadow,
  idx,
  setProjectList,
}: propTypes) {
  return (
    <div className="relative flex flex-col" style={{ perspective: '500px' }}>
      <MainImg
        id={id}
        idx={idx}
        image={image}
        setProjectList={setProjectList}
      />
      <Shadow idx={idx} shadow={shadow} />
    </div>
  );
}
