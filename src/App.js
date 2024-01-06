import './App.css';
import About1 from './Components/about';
// import About from './Components/about';
import Marcas from './Components/marcas';
import Servicios from './Components/servicios';
import Main from './pages/main1';


function App() {
  return (
    <div className="App overflow-hidden">
      <Main />
      <Marcas />
      <Servicios />
      <About1 />
      {/* <About /> */}


      {/* <Nav className="miNav" /> */}
      {/* <Main className="miMain" /> */}
    </div>
  );
}                    

export default App;
