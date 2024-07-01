interface propTypes {
  text: string;
  idx: number;
  currentPage: number;
}

export default function NavBtn({ text, idx, currentPage }: propTypes) {
  const navBtnHandler = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95 * idx,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={navBtnHandler}
      className={`mr-10 tracking-wide text-xl ${
        currentPage === idx
          ? 'text-gray-400 font-bold'
          : 'text-beige-100 hover:text-red-100'
      }`}
    >
      {text}
    </button>
  );
}
