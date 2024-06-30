import MainItem from './MainItem';
import { dev } from './ProjectBody';

interface propTypes {
  devs: dev[];
}

export default function Main({ devs }: propTypes) {
  return (
    <div className="flex flex-col w-full px-3 py-3 mt-10 overflow-y-scroll bg-gray-500 rounded-lg h-136">
      <span className="mb-4 text-lg font-bold text-yellow-100">개발</span>
      {devs.map((dev, idx) => (
        <MainItem key={idx} title={dev.title} body={dev.body} />
      ))}
    </div>
  );
}
