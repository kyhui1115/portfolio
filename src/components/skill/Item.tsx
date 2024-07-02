import { ReactElement } from 'react';

interface propTypes {
  name: string;
  icon: ReactElement;
}

export default function Item({ name, icon }: propTypes) {
  return (
    <div className="w-[90%] h-8 bg-gray-400 rounded-lg mb-3 flex items-center">
      <div className="ml-1 text-2xl text-beige-100">{icon}</div>
      <span className="text-sm w-[80%] text-center text-beige-100">{name}</span>
    </div>
  );
}
