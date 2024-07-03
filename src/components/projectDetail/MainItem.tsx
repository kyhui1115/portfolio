import { ReactElement } from 'react';

interface propTypes {
  title: string;
  body: ReactElement;
}

export default function MainItem({ title, body }: propTypes) {
  return (
    <div className="mb-10 text-beige-100">
      <span className="text-lg font-bold">{title}</span>
      <ul className="mt-2 ml-8 text-lg list-disc break-keep">{body}</ul>
    </div>
  );
}
