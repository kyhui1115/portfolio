import { ReactElement } from 'react';

interface propTypes {
  icon: ReactElement;
  text: string;
}

export default function UserInfoItem({ icon, text }: propTypes) {
  return (
    <div className="flex items-center mt-1">
      {icon}
      <span className="ml-2 text-xl">{text}</span>
    </div>
  );
}
