import { ReactElement } from 'react';
import MainItem from './MainItem';
import { dev } from './ProjectBody';

interface propTypes {
  devs: dev[];
  role: {
    title: string;
    body: ReactElement;
  };
}

export default function Main({ devs, role }: propTypes) {
  return (
    <div className="flex flex-col w-full px-3 py-3 mt-10 overflow-y-scroll bg-gray-500 rounded-lg h-136">
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold text-yellow-100">역할</span>
      </div>
      <div className="mb-10 text-lg text-beige-100">
        <ul className="ml-8 list-disc">{role.body}</ul>
      </div>
      <span className="mb-4 text-lg font-bold text-yellow-100">개발</span>
      {devs.map((dev, idx) => (
        <MainItem key={idx} title={dev.title} body={dev.body} />
      ))}
    </div>
  );
}
