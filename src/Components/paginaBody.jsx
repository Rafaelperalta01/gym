import '../styles/paginaBody.css';
import Caja from './Caja';
import productos from '../Celulares.json'; // Importa el archivo JSON

export default function PaginaBody({ elementos }) {

  
  return (
    <div className='PaginaBody'>
      <div className="pagina-body">
        {productos[elementos] .map((producto) => 
          <Caja nombre={producto.nombre}
            oldprecio={producto.oldprecio}
            newprecio={producto.newprecio}
          />
        )}
      </div>
    </div>
  );
}
