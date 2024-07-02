import { link } from './ProjectBody';

interface propTypes {
  link: link;
  idx: number;
}

export default function Link({ link, idx }: propTypes) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`text-beige-100 ${
        idx === 1 ? 'border-l-4 border-l-yellow-100 ml-3 pl-3' : ''
      }`}
    >
      {link.icon}
    </a>
  );
}
