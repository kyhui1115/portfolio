import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { project } from './Project';

interface propTypes {
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function LeftArrowBtn({ setProjectList }: propTypes) {
  const btnHandler = () => {
    let lastProject: project[] = [];

    setProjectList((prev) => {
      const newList = [...prev.slice(1)];
      lastProject = [...prev.slice(0, 1)];
      return newList;
    });

    setProjectList((prev) => {
      const newList = [...prev, ...lastProject];
      localStorage.setItem('list', JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <button
      className="text-5xl mb-28 hover:text-red-100 text-beige-100"
      onClick={btnHandler}
    >
      <IoIosArrowBack />
    </button>
  );
}
