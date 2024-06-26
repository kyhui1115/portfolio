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
    <div className="flex flex-col items-start mt-16 -ml-16">
      <span className="text-2xl font-semibold tracking-wide text-beige-100">
        {title}
      </span>
      <span className="mb-6 text-sm font-semibold text-gray-100">
        {typeAndTerm}
      </span>
      <span className="text-lg font-semibold text-yellow-100">introduce</span>
      <span className="text-beige-100">{intro}</span>
      <span className="mt-6 text-lg font-semibold text-yellow-100">skill</span>
      <span className="whitespace-pre-line text-beige-100 text-start">
        {skill}
      </span>
    </div>
  );
}
