import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

export default function Main() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
