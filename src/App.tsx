import Introduce from './pages/Introduce';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Nav from './components/nav/Nav';
import ScrollText from './components/introduce/ScrollText';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="relative flex flex-col w-full">
      <Nav currentPage={currentPage} />
      <Introduce setCurrentPage={setCurrentPage} />
      <Skill setCurrentPage={setCurrentPage} />
      <Projects setCurrentPage={setCurrentPage} />
      <Background setCurrentPage={setCurrentPage} />
      {currentPage < 3 ? <ScrollText /> : null}
    </div>
  );
}

export default App;
