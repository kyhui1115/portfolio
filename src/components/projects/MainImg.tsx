import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { project } from './Project';

interface propTypes {
  id: number;
  idx: number;
  image: string;
  review: string;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function MainImg({
  id,
  idx,
  image,
  review,
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
    <button
      onClick={projectBtnHandler}
      style={{
        transform: 'rotateY(15deg)',
        width: 800 * (1 - 0.14 * idx) + 'px',
        height: 368 * (1 - 0.14 * idx) + 'px',
      }}
      className="relative z-10 flex items-center justify-center duration-1000 bg-gray-500 rounded-xl"
    >
      <img src={image} alt="" className="z-10 rounded-xl hover:opacity-40" />
      <span className="absolute text-3xl font-bold text-red-100">more</span>
    </button>
  );
}
