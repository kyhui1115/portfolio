interface propTypes {
  term: string;
}

export default function Term({ term }: propTypes) {
  return (
    <span className="mt-1 mb-6 text-lg font-semibold text-gray-200">
      {term}
    </span>
  );
}
