import AboutMe from './pages/AboutMe';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Nav from './components/nav/Nav';
import ScrollText from './components/AboutMe/ScrollText';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
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

export default App;
