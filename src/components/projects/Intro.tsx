interface propTypes {
  intro: string;
}

export default function Intro({ intro }: propTypes) {
  return (
    <>
      <span className="mt-4 text-lg font-semibold text-gray-100">
        introduce
      </span>
      <span className="ml-1 text-beige-100">{intro}</span>
    </>
  );
}
