import Introduce from './pages/Introduce';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Background from './pages/Background';

function App() {
  return (
    <div className="flex flex-col w-full">
      <Introduce />
      <Skill />
      <Projects />
      <Background />
    </div>
  );
}

export default App;
