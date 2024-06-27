import Copyright from './Copyright';
import UserInfo from './UserInfo';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center h-40 pl-4 bg-gray-500">
      <UserInfo />
      <Copyright />
    </div>
  );
}
