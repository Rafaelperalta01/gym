import '../styles/caja.css';
import img from '../images/imagenesMain/auris.png'
import { Link } from 'react-router-dom';

export default function Caja(props){

    const url = window.location.pathname;

        const producto = {
            "nombre":props.nombre,
            "oldprecio":props.oldprecio,
            "newprecio":props.newprecio,
            "id":props.id,
        }

    return(
        <div className="caja">
            <img className='img' src={img} alt="" />
            <div className='detalles'>
                <h3 className='nombre-producto'>{props.nombre}</h3>
                <p className='precio-antes'>Antes: $<del>{props.oldprecio}</del></p>
                <p>Ahora: ${props.newprecio}</p><br/>
                <Link to={`${url}/${props.id}`}>
                    <button className='btn-comprar'>Comprar</button>
                </Link>
                
            </div>
        </div>
    );
}


