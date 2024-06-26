import { ReactElement } from 'react';

interface propTypes {
  text: ReactElement;
}

export default function IntroduceBodyText({ text }: propTypes) {
  return (
    <div className="ml-8">
      <p className="mb-6 text-xl whitespace-pre-wrap text-beige-100">{text}</p>
    </div>
  );
}
