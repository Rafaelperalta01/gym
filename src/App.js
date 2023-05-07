import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Celulares from './pages/Celulares';
import Notebooks from './pages/Notebooks';
import Juegos from './pages/Juegos';
import Marca from './pages/Marca';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/celulares' element={<Celulares />} />
          <Route path='/notebooks' element={<Notebooks />} />
          <Route path='/juegos' element={<Juegos />} />
          <Route path="/celulares/:marca" element={<Marca />} />
          <Route path="/notebooks/:marca" element={<Marca />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
