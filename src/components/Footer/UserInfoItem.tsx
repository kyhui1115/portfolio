import { ReactElement } from 'react';

interface propTypes {
  icon: ReactElement;
  href: string;
}

export default function UserInfoItem({ icon, href }: propTypes) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center mt-2"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}
