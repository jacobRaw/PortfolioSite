import './App.css';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import About from './pages/About.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
