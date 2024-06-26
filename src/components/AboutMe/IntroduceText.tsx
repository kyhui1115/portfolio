import { ReactElement } from 'react';

interface propTypes {
  text: ReactElement;
}

export default function IntroduceText({ text }: propTypes) {
  return (
    <p className="mb-6 text-xl whitespace-pre-wrap text-beige-100">{text}</p>
  );
}
