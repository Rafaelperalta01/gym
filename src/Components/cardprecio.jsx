import '../styles/card.css'
import si from '../images/check.png'
import no from '../images/error.png'


export default function Card({ nombre, precio, b1, b2, b3, b4, b5, b6 }){
    return(
        <div className='box' data-aos="flip-left"data-aos-easing="ease-out-cubic">
            <div className="box-cont">
                <div className="sup">
                    <h1>{nombre}</h1>
                    <p className='precio'>${precio}</p>
                </div>
                
                <div className="beneficios">
                    <ul>
                        <li>
                            <p><img className='ben-img' src={b1 ? si : no} alt="Check" /> Instructor</p>
                        </li>
                        <li>
                            <p><img className='ben-img' src={b2 ? si : no} alt="Check" /> 3 días</p>
                        </li>
                        <li>
                            <p><img className='ben-img' src={b3 ? si : no} alt="Check" /> 6 días</p>
                        </li>
                        <li>
                            <p><img className='ben-img' src={b4 ? si : no} alt="Check" /> Proteina</p>
                        </li>
                        <li>
                            <p><img className='ben-img' src={b5 ? si : no} alt="Check" /> Sesión masajes</p>
                        </li>
                        <li>
                            <p><img className='ben-img' src={b6 ? si : no} alt="Check" /> Cita nutricionista</p>
                        </li>
                    </ul>
                </div>
                <a href="#enviaremail"><button className='card-btn'>Comenzar ahora</button></a>
            </div>
        </div>
    )
}


