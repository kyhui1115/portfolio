interface propTypes {
  term: string;
}

export default function Term({ term }: propTypes) {
  return (
    <span className="mb-8 text-lg font-semibold text-red-100">{term}</span>
  );
}
