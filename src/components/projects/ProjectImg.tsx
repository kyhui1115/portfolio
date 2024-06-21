import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { project } from './Project';

interface propTypes {
  image: string;
  shadow: string;
  idx: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function ProjectImg({
  image,
  shadow,
  idx,
  setProjectList,
}: propTypes) {
  const navigate = useNavigate();

  const projectBtnHandler = () => {
    if (idx === 0) {
      navigate(`${idx}`);
    }

    if (idx !== 0) {
      setProjectList((prev) => {
        return [...prev.splice(idx, 1), ...prev];
      });
    }
  };

  return (
    <div className="relative flex flex-col" style={{ perspective: '500px' }}>
      <button
        onClick={projectBtnHandler}
        style={{
          transform: 'rotateY(15deg)',
          width: 700 * (1 - 0.14 * idx) + 'px',
          height: 322 * (1 - 0.14 * idx) + 'px',
        }}
      >
        <img src={image} alt="" className="rounded-xl" />
      </button>
      <div
        style={{
          width: 700 * (1 - 0.14 * idx) + 'px',
          height: 100 * (1 - 0.14 * idx) + 'px',
          transform: 'rotateY(15deg) scaleY(-1)',
        }}
        className="absolute bottom-0 bg-gray-500 rounded-b-xl"
      />
      <img
        src={shadow}
        alt=""
        style={{
          width: 700 * (1 - 0.14 * idx) + 'px',
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

// 0.14

// 0.86
// 0.72
