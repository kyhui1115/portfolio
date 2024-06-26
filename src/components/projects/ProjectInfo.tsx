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
    <div className="flex flex-col items-start mt-12 -ml-12">
      <span className="text-2xl font-semibold tracking-wide text-beige-100">
        {title}
      </span>
      <span className="mb-6 text-xs text-gray-100">{typeAndTerm}</span>
      <span className="text-lg font-semibold text-red-100">introduce</span>
      <span className="text-sm text-beige-100">{intro}</span>
      <span className="mt-6 text-lg font-semibold text-red-100">skill</span>
      <span className="text-sm whitespace-pre-line text-beige-100 text-start">
        {skill}
      </span>
    </div>
  );
}
