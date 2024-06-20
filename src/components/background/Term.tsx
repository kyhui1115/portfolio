interface propTypes {
  term: string;
}

export default function Term({ term }: propTypes) {
  return <span className="mb-8 text-lg text-beige-400">{term}</span>;
}
