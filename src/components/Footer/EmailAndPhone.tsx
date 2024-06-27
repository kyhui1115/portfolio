import { IoMailOutline } from 'react-icons/io5';
import { BsPhone } from 'react-icons/bs';

export default function EmailAndPhone() {
  return (
    <div className="flex items-center mt-6">
      <IoMailOutline className="mr-1 text-xl" />
      <span>kyhui1115@gmail.com</span>
      <div className="w-0.5 h-3.5 bg-yellow-100 mx-4" />
      <BsPhone className="mr-1 text-xl" />
      <span>010-5152-2597</span>
    </div>
  );
}
