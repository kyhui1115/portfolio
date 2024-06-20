import { ReactElement } from 'react';

interface propTypes {
  text: ReactElement;
  line: string;
}

export default function IntroduceBodyContent({ text, line }: propTypes) {
  return (
    <div className="flex items-end">
      <div className={`border-t border-r border-gray-400 h-36 ${line}`} />
      <p className="mb-4 ml-4 text-xl text-gray-400 whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}
