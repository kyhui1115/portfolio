import { useState } from 'react';
import Nav from '../components/nav/Nav';
import AboutMe from '../pages/AboutMe';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Background from '../pages/Background';
import Footer from '../components/footer/Footer';
import ScrollText from '../components/aboutMe/ScrollText';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="relative flex flex-col w-full">
      <Nav currentPage={currentPage} />
      <AboutMe setCurrentPage={setCurrentPage} />
      <Skill setCurrentPage={setCurrentPage} />
      <Projects setCurrentPage={setCurrentPage} />
      <Background setCurrentPage={setCurrentPage} />
      <Footer />
      {currentPage < 3 ? <ScrollText /> : null}
    </div>
  );
}
