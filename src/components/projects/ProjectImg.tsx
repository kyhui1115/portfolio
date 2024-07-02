import { Dispatch, SetStateAction } from 'react';

import { project } from './Project';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const projectBtnHandler = () => {
    if (idx === 0) {
      navigate(`/project/${id}`);
    }

    if (idx !== 0) {
      setProjectList((prev) => {
        const newList = [...prev.splice(idx, 1), ...prev];
        localStorage.setItem('list', JSON.stringify(newList));
        return newList;
      });
    }
  };

  return (
    <div className="relative flex flex-col" style={{ perspective: '500px' }}>
      <button
        onClick={projectBtnHandler}
        style={{
          transform: 'rotateY(15deg)',
          width: 800 * (1 - 0.14 * idx) + 'px',
          height: 368 * (1 - 0.14 * idx) + 'px',
        }}
        className="flex items-center justify-center bg-gray-500"
      >
        <span className="absolute text-3xl font-bold text-red-100">more</span>
        <img src={image} alt="" className="z-10 rounded-xl hover:opacity-50" />
      </button>
      <div
        style={{
          width: 800 * (1 - 0.14 * idx) + 'px',
          height: 100 * (1 - 0.14 * idx) + 'px',
          transform: 'rotateY(15deg) scaleY(-1)',
        }}
        className="absolute bottom-0 bg-gray-500 rounded-b-xl"
      />
      <img
        src={shadow}
        alt=""
        style={{
          width: 800 * (1 - 0.14 * idx) + 'px',
          height: 100 * (1 - 0.14 * idx) + 'px',
          transform: 'rotateY(15deg) scaleY(-1)',
          maskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
        className="opacity-20 rounded-b-xl"
      />
    </div>
  );
}
