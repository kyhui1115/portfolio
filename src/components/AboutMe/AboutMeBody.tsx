import Introduce from './Introduce';
import UserInfo from './UserInfo';

export default function AboutMeBody() {
  return (
    <div className="flex mb-2">
      <Introduce />
      <UserInfo />
    </div>
  );
}
