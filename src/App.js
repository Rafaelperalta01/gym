import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About1 from './Components/about';
// import About from './Components/about';
import Marcas from './Components/marcas';
import Servicios from './Components/servicios';
import Testimonios from './Components/testimonios';
import Main from './pages/main1';
import Pagina from './pages/pag';
import Gallery from './Components/gallery';


function App() {
  return (
    <div className="App overflow-hidden">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pagina />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      
      {/* <About /> */}


      {/* <Nav className="miNav" /> */}
      {/* <Main className="miMain" /> */}
    </div>
  );
}                    

export default App;
