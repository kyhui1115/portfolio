interface propTypes {
  line: {
    top: number;
    left: number;
  };
  centerCoor: {
    top: number;
    left: number;
  };
}

export default function Line({ line, centerCoor }: propTypes) {
  const lineWidth = Math.sqrt(
    (centerCoor.top - line.top) ** 2 + (centerCoor.left - line.left) ** 2
  ).toFixed(0);

  const lineRotate =
    (Math.atan2(centerCoor.top - line.top, centerCoor.left - line.left) * 180) /
    Math.PI;

  return (
    <div
      className="absolute w-0.5 h-0.5 bg-gray-400 origin-[0%]"
      style={{
        top: line.top + 'px',
        left: line.left + 'px',
        width: lineWidth + 'px',
        rotate: lineRotate + 'deg',
      }}
    />
  );
}
