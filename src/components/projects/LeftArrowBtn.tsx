import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { project } from './Project';

interface propTypes {
  pageHeight: number;
  pageWidth: number;
  setProjectList: Dispatch<SetStateAction<project[]>>;
}

export default function LeftArrowBtn({
  pageHeight,
  pageWidth,
  setProjectList,
}: propTypes) {
  const btnHandler = () => {
    setProjectList((prev) => {
      return [...prev.slice(1), ...prev.slice(0, 1)];
    });
  };

  return (
    <button
      style={{
        top: pageHeight * 0.45 + 'px',
        left: pageWidth * 0.1 + 'px',
      }}
      className="absolute text-5xl"
      onClick={btnHandler}
    >
      <IoIosArrowBack className="text-beige-100" />
    </button>
  );
}
