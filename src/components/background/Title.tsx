interface propTypes {
  text: string;
}

export default function Title({ text }: propTypes) {
  return <span className="text-4xl font-semibold text-gray-400">{text}</span>;
}
