import NavItem from './NavItem';

export default function NavList() {
  return (
    <div className="flex flex-col items-start mt-40 ml-6">
      {navList.map((nav) => (
        <NavItem key={nav.name} name={nav.name} path={nav.path} />
      ))}
    </div>
  );
}

const navList = [
  {
    name: 'introduce',
    path: '/',
  },
  {
    name: 'skill',
    path: '/skill',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'background',
    path: '/background',
  },
];
