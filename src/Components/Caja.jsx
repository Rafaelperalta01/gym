import '../styles/caja.css';
import img from '../images/imagenesMain/auris.png'

export default function Caja(props){
    return(
        <div className="caja">
            <img className='img' src={img} alt="" />
            <div className='detalles'>
                <h3 className='nombre-producto'>{props.nombre}</h3>
                <p className='precio-antes'>Antes: $<del>{props.oldprecio}</del></p>
                <p>Ahora: ${props.newprecio}</p><br/>
                <button className='btn-comprar'>Comprar</button>
            </div>
            
        </div>
    );
}


