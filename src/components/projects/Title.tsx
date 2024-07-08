interface propTypes {
  title: string;
}

export default function Title({ title }: propTypes) {
  return (
    <span className="text-2xl font-semibold tracking-wide text-beige-100">
      {title}
    </span>
  );
}
