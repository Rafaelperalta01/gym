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

  const img = producto.img;
  return (
    <>
      <Header />
      <div className='comprar'>
        {producto && (
          <div className='element'>
            <img src={producto.img} alt="" />
            <p>{producto.nombre} </p>
            <p>{img} </p>
          </div>
        )}
        <div class="caja-pago">
        <h2>Pago con tarjeta</h2>
        <form>
        <label for="nombre-titular">Nombre del titular:</label>
        <input type="text" id="nombre-titular" required />

        <label for="numero-tarjeta">Número de tarjeta:</label>
        <input type="text" id="numero-tarjeta" required />

        <label for="fecha-expiracion">Fecha de expiración:</label>
        <input type="text" id="fecha-expiracion" required />

        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" required />

        <button type="submit">Pagar</button>
        </form>
        </div>
        <div className='mp'>
            <h2>tambien puedes pagar con MercadoPago</h2><br />
            <a href="http://mercadopago.com" target="_blank" >pagar con MP</a>
        </div>
        
      </div>
      
    </>
  );
}
