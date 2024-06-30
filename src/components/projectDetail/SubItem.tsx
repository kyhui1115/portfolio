interface propTypes {
  name: string;
  text: string;
}

export default function SubItem({ name, text }: propTypes) {
  return (
    <div className="flex items-center w-full h-10 px-3 mt-2 text-lg bg-gray-500 rounded-lg">
      <span className="font-bold text-yellow-100">{name}</span>
      <span className="ml-4 whitespace-pre-wrap text-beige-100">{text}</span>
    </div>
  );
}
