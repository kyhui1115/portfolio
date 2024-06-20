interface propTypes {
  title: string;
  typeAndTerm: string;
  intro: string;
  skill: string;
}

export default function ProjectInfo({
  title,
  typeAndTerm,
  intro,
  skill,
}: propTypes) {
  return (
    <div className="flex flex-col items-start -ml-12 mt-14">
      <span className="text-2xl font-semibold tracking-wide text-beige-100">
        {title}
      </span>
      <span className="my-4 text-sm text-gray-200">{typeAndTerm}</span>
      <span className="text-xl font-semibold text-beige-100">introduce</span>
      <span className=" text-beige-100">{intro}</span>
      <span className="mt-4 text-xl font-semibold text-beige-100">skill</span>
      <span className="mb-24 whitespace-pre-line text-beige-100 text-start">
        {skill}
      </span>
    </div>
  );
}
