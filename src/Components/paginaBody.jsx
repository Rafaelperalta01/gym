import '../styles/paginaBody.css';
import Caja from './Caja';
import productos from '../Celulares.json'; // Importa el archivo JSON

export default function PaginaBody() {

  
  return (
    <div className='PaginaBody'>
      <div className="pagina-body">
        {productos.notebooks.map((producto, index) => (
          <Caja nombre={producto.nombre}
            key={index}
            oldprecio={producto.oldprecio}
            newprecio={producto.newprecio}
          />
        ))}
      </div>
    </div>
  );
}
