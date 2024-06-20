interface propTypes {
  text: string;
  color?: string;
}

export default function Title({ text, color }: propTypes) {
  return (
    <span
      className={`absolute text-2xl font-semibold right-4 top-2 ${
        color === undefined ? 'text-gray-400' : color
      }`}
    >
      {text}
    </span>
  );
}
