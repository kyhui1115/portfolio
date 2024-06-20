import Line from './Line';

interface propTypes {
  backgroundWidth: number;
  backgroundHeight: number;
}

export default function Lines({
  backgroundWidth,
  backgroundHeight,
}: propTypes) {
  const centerCoor = {
    top: backgroundHeight * 0.5,
    left: backgroundWidth * 0.6,
  };

  const lineList = [
    {
      top: -10,
      left: backgroundWidth * 0.1,
    },
    {
      top: backgroundHeight,
      left: backgroundWidth * 0.3 + 10,
    },
    {
      top: backgroundHeight * 0.2,
      left: backgroundWidth + 10,
    },
    {
      top: backgroundHeight * 0.75,
      left: backgroundWidth + 10,
    },
  ];

  return (
    <>
      {lineList.map((line, i) => (
        <Line key={i} line={line} centerCoor={centerCoor} />
      ))}
    </>
  );
}
