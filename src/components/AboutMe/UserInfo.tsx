import { IoMailOutline } from 'react-icons/io5';
import { BsPhone, BsGithub } from 'react-icons/bs';
import UserInfoItem from './UserInfoItem';

export default function UserInfo() {
  return (
    <div className="flex flex-col text-beige-100">
      {userInfoList.map((userInfo, i) => (
        <UserInfoItem key={i} icon={userInfo.icon} text={userInfo.text} />
      ))}
    </div>
  );
}

const userInfoList = [
  {
    icon: <IoMailOutline className="text-2xl" />,
    text: 'kyhui1115@gmail.com',
  },
  {
    icon: <BsPhone className="text-2xl" />,
    text: '010-5152-2597',
  },
  {
    icon: <BsGithub className="text-2xl" />,
    text: 'https://github.com/kyhui1115',
  },
];
