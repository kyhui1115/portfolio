import { ReactElement } from 'react';

interface propTypes {
  title: string;
  body: ReactElement;
}

export default function MainItem({ title, body }: propTypes) {
  return (
    <div className="mb-10 text-lg text-beige-100">
      <span className="text-xl font-bold">{title}</span>
      <ul className="mt-2 ml-8 whitespace-pre-wrap list-disc">{body}</ul>
    </div>
  );
}
