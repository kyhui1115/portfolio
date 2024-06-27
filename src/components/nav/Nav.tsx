import NavBtn from './NavBtn';
import Title from './Title';

interface propTypes {
  currentPage: number;
}

export default function Nav({ currentPage }: propTypes) {
  return (
    <div className="sticky top-0 z-20 w-full h-[5vh] bg-yellow-100 flex justify-end items-center">
      <Title />
      {navList.map((nav, idx) => (
        <NavBtn key={idx} text={nav.text} idx={idx} currentPage={currentPage} />
      ))}
    </div>
  );
}

const navList = [
  { text: 'about me' },
  { text: 'skill' },
  { text: 'project' },
  { text: 'background' },
];
