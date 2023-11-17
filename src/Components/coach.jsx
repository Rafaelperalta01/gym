import '../styles/coach.css'
import ent from '../images/entrenador.png'
import ent2 from '../images/entrenadora.png'
import wsp from '../images/whatsapp.png'
import insta from '../images/instagram.png'


export default function Coach(){
    return(
        <div className='coach-box' data-aos="fade-up">
            <div className='coach-padre'>
                <div className="img">
                    <img className='coach-img' src={ent} alt="Entrenador1" />
                </div>
                <div className="cont">
                    <h1>José Gonzales</h1>
                    <p>MUSCULACIÓN</p>
                    <ul>
                        <li><img className='coach-red' src={wsp} alt="WhatssApp" /></li>
                        <li><img className='coach-red' src={insta} alt="Instagram" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export  function Coach2(){
    return(
        <div className='coach-box' data-aos="fade-up">
            <div className='coach-padre'>
                <div className="img-mina">
                    <img className='coach-img' src={ent2} alt="Entrenador1" />
                </div>
                <div className="cont">
                    <h1>Emilia Ortiz</h1>
                    <p>CROSSFIT</p>
                    <ul>
                        <li><img className='coach-red' src={wsp} alt="WhatssApp" /></li>
                        <li><img className='coach-red' src={insta} alt="Instagram" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}







