interface propTypes {
  term: string;
}

export default function Term({ term }: propTypes) {
  return (
    <div className="flex items-center h-10 px-3 ml-auto text-lg bg-gray-500 rounded-lg w-60">
      <span className="font-bold text-yellow-100">기간</span>
      <span className="ml-auto text-beige-100">{term}</span>
    </div>
  );
}
