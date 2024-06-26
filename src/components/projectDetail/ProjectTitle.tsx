interface propTypes {
  title: string;
}

export default function ProjectTitle({ title }: propTypes) {
  return (
    <span className="absolute text-xl font-semibold right-8 text-beige-100">
      {title}
    </span>
  );
}
