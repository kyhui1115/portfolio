import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import Main from './layout/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
