import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      className="absolute flex items-center text-xl left-8 text-beige-100 hover:text-red-100"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack className="mt-[1px] mr-2" />
      <span className="font-semibold">back to</span>
    </button>
  );
}
