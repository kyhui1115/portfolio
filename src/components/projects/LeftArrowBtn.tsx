import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { project } from './Project';

interface propTypes {
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function LeftArrowBtn({ setProjectList }: propTypes) {
  const btnHandler = () => {
    setProjectList((prev) => {
      return [...prev.slice(1), ...prev.slice(0, 1)];
    });
  };

  return (
    <button
      className="mb-10 text-5xl hover:text-red-100 text-beige-100"
      onClick={btnHandler}
    >
      <IoIosArrowBack />
    </button>
  );
}
