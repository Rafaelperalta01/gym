import { useParams } from 'react-router-dom';
import '../styles/marca.css';
import Header from '../Components/header';
import producto from '../Celulares.json';
import Caja from '../Components/Caja';

export default function Marca() {

  const { marca } = useParams();

  return (
    <div>
      <Header />
      <div className='body'>
        <h1 className='marca-h1'> {marca} </h1>
        <div className='caja-productos'>
          <div className='productos'>
            {producto['notebooks'].filter(e => e.marca === marca ).map((producto) => 
              <Caja nombre={producto.nombre}
              oldprecio={producto.oldprecio}
              newprecio={producto.newprecio}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
