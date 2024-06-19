import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import Introduce from './pages/Introduce';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Background from './pages/Background';

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen">
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Introduce />} />
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
