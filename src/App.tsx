import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import Introduce from './components/introduce/Introduce';
import Skill from './components/skill/Skill';
import Projects from './components/projects/Projects';
import Background from './components/background/Background';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <Routes>
          <Route element={<Main />}>
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/background" element={<Background />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
