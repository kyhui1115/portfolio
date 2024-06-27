import { BsGithub } from 'react-icons/bs';
import UserInfoItem from './UserInfoItem';
import EmailAndPhone from './EmailAndPhone';

export default function UserInfo() {
  return (
    <div className="flex flex-col items-center mb-1 text-beige-100">
      {userInfoList.map((userInfo, i) => (
        <UserInfoItem key={i} icon={userInfo.icon} href={userInfo.href} />
      ))}
      <EmailAndPhone />
    </div>
  );
}

const userInfoList = [
  {
    icon: <BsGithub className="text-3xl" />,
    href: 'https://github.com/kyhui1115',
  },
];
