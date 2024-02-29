import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './Components/about';
import Pagina from './pages/pag';
import Gallery from './Components/gallery';
import Concepcion from './pages/Concepcion';
import Monteros from './pages/Monteros';
import Notfound from './pages/notfound';


function App() {
  return (
    <div className="App overflow-hidden">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pagina />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/Concepcion' element={<Concepcion />} />
          <Route path='/Monteros' element={<Monteros />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      
      {/* <About /> */}


      {/* <Nav className="miNav" /> */}
      {/* <Main className="miMain" /> */}
    </div>
  );
}                    

export default App;
