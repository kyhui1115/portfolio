import { IoMailOutline } from 'react-icons/io5';
import { BsPhone, BsGithub } from 'react-icons/bs';
import UserInfoItem from './UserInfoItem';

export default function UserInfo() {
  return (
    <div className="absolute flex flex-col text-gray-400 bottom-3 left-3">
      {userInfoList.map((userInfo, i) => (
        <UserInfoItem key={i} icon={userInfo.icon} text={userInfo.text} />
      ))}
    </div>
  );
}

const userInfoList = [
  {
    icon: <IoMailOutline className="text-lg" />,
    text: 'kyhui1115@gmail.com',
  },
  {
    icon: <BsPhone className="text-lg" />,
    text: '010-5152-2597',
  },
  {
    icon: <BsGithub className="text-lg" />,
    text: 'https://github.com/kyhui1115',
  },
];
