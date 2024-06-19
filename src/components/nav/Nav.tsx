import NavTitle from './NavTitle';
import NavList from './NavList';
import UserInfo from './UserInfo';

export default function Nav() {
  return (
    <div className="flex flex-col h-full border-r w-60 bg-beige-200 border-r-gray-400 shrink-0">
      <NavTitle />
      <NavList />
      <UserInfo />
    </div>
  );
}
