interface propTypes {
  text: string;
}

export default function SubTitle({ text }: propTypes) {
  return (
    <span className="text-2xl font-semibold text-gray-400 mt-14">{text}</span>
  );
}
