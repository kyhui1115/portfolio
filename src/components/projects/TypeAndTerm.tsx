interface propTypes {
  typeAndTerm: string;
}

export default function TypeAndTerm({ typeAndTerm }: propTypes) {
  return (
    <span className="mt-2 ml-8 text-sm font-semibold text-gray-100 whitespace-pre-wrap">
      {typeAndTerm}
    </span>
  );
}
