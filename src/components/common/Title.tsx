interface propTypes {
  text: string;
}

export default function Title({ text }: propTypes) {
  return (
    <span className="absolute text-2xl font-semibold text-yellow-100 right-4 top-2">
      {text}
    </span>
  );
}
