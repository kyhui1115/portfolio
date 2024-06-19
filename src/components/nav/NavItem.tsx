import { useLocation, useNavigate } from 'react-router-dom';

interface propTypes {
  name: string;
  path: string;
}

export default function NavItem({ name, path }: propTypes) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <button
      className={`mb-1 ${
        pathname === path ? 'font-semibold text-gray-400' : 'text-gray-300'
      }`}
      onClick={() => navigate(path)}
    >
      {pathname === path ? name + ' .' : name}
    </button>
  );
}
