interface propTypes {
  text: string;
}

export default function Body({ text }: propTypes) {
  return (
    <p className="text-xl leading-9 text-gray-400 whitespace-pre-line">
      {text}
    </p>
  );
}
