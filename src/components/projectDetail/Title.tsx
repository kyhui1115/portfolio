interface propTypes {
  title: string;
}

export default function Title({ title }: propTypes) {
  return <span className="text-6xl font-semibold text-beige-100">{title}</span>;
}
