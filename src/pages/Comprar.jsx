import { useParams } from 'react-router-dom';
import Header from '../Components/header';
import '../styles/comprar.css';
import productos from '../Celulares.json';

export default function Comprar() {
  const url = window.location.pathname;

  var elemento;
    
  if (url.includes('celulares')) {
    elemento = 'celulares';
  } else {
    elemento = 'notebooks';
  }

  const { id } = useParams();
  const producto = productos[elemento].find(e => e.id === id);

  return (
    <>
      <Header />
      <div className='comprar'>
        {producto && (
          <div>
            <p>id={producto.id}</p>
            <p>nombre={producto.nombre}</p>
            <p>oldprecio={producto.oldprecio}</p>
            <p>newprecio={producto.newprecio}</p>
          </div>
        )}
        <h1>asdgsdfg</h1>
        <h1>{id}</h1>
      </div>
    </>
  );
}


