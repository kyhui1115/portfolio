import Link from './Link';
import { link } from './ProjectBody';

interface propTypes {
  links: link[];
}

export default function Links({ links }: propTypes) {
  return (
    <div className="flex items-center h-10 px-3 ml-4 bg-gray-500 rounded-lg">
      {links.map((link, idx) => (
        <Link key={idx} link={link} idx={idx} />
      ))}
    </div>
  );
}
