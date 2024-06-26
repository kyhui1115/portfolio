import { IoIosArrowDown } from 'react-icons/io';

export default function ScrollText() {
  return (
    <div className="absolute flex flex-col items-center bottom-2 right-4 animate-bounce">
      <span className="font-semibold text-red-100 ">scroll down</span>
      <IoIosArrowDown className="text-xl text-red-100" />
    </div>
  );
}
