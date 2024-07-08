interface propTypes {
  text: string;
}

export default function SkillItem({ text }: propTypes) {
  return (
    <span className="px-1.5 mr-1 text-sm text-gray-400 bg-yellow-100 rounded-md">
      {text}
    </span>
  );
}
