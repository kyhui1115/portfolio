interface propTypes {
  idx: number;
  shadow: string;
}

export default function Shadow({ idx, shadow }: propTypes) {
  return (
    <>
      <div
        style={{
          width: 800 * (1 - 0.14 * idx) + 'px',
          height: 100 * (1 - 0.14 * idx) + 'px',
          transform: 'rotateY(15deg) scaleY(-1)',
        }}
        className="absolute bottom-0 duration-1000 bg-gray-500 rounded-b-xl"
      />
      <img
        src={shadow}
        alt=""
        style={{
          width: 800 * (1 - 0.14 * idx) + 'px',
          height: 100 * (1 - 0.14 * idx) + 'px',
          transform: 'rotateY(15deg) scaleY(-1)',
          maskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
        className="duration-1000 opacity-20 rounded-b-xl"
      />
    </>
  );
}
