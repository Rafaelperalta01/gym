import '../styles/main.css'
import { useState } from 'react'
import '../styles/main.css'
import close from '../images/delete.png'
import musc1 from '../images/salamusculacion1.jpg'
import musc2 from '../images/salamusculacion2.png'
import musc3 from '../images/salamusculacion3.jpg'
import cardio1 from '../images/salacardio1.jpg'
import cardio2 from '../images/salacardio2.jpg'
import cardio3 from '../images/salacardio3.jpg'
import yoga1 from '../images/salayoga1.webp'
import yoga2 from '../images/salayoga2.jpeg'
import yoga3 from '../images/salayoga3.jpg'
import cross1 from '../images/salacrossfit1.jpg'
import cross2 from '../images/salacrossfit2.jpg'
import cross3 from '../images/salacrossfit3.jpeg'

const Servicios = () => {
    const [servicio, setServicio] = useState('');

    const verMusculacion = () => {
        setServicio('musculacion')
    }
    const verCardio = () => {
        setServicio('cardio')
    }
    const verYoga = () => {
        setServicio('yoga')
    }
    const verCrossfit = () => {
        setServicio('crossfit')
    }
    const verKids = () => {
        setServicio('kids')
    }
    const cerrarVentana = () => {
        setServicio('')
    }

    const [fondomusculacion, setFondomusculacion] = useState(musc1); // Estado para la imagen de fondo
    const [fondocardio, setFondocardio] = useState(cardio1); // Estado para la imagen de fondo
    const [fondoyoga, setFondoyoga] = useState(yoga1); // Estado para la imagen de fondo
    const [fondocrossfit, setFondocrossfit] = useState(cross1); // Estado para la imagen de fondo

    const cambiarFonduMusc = () => {
        setFondomusculacion(musc1);
    };
    const cambiarFonduMusc2 = () => {
        setFondomusculacion(musc2);
    };
    const cambiarFonduMusc3 = () => {
        setFondomusculacion(musc3);
    };

    const cambiarFonduCardio = () => {
        setFondocardio(cardio1);
    };
    const cambiarFonduCardio2 = () => {
        setFondocardio(cardio2);
    };
    const cambiarFonduCardio3 = () => {
        setFondocardio(cardio3);
    };

    const cambiarFondoYoga = () => {
        setFondoyoga(yoga1);
    };
    const cambiarFondoYoga2 = () => {
        setFondoyoga(yoga2);
    };
    const cambiarFondoYoga3 = () => {
        setFondoyoga(yoga3);
    };

    const cambiarFonduCross = () => {
        setFondocrossfit(cross1);
    };
    const cambiarFonduCross2 = () => {
        setFondocrossfit(cross2);
    };
    const cambiarFonduCross3 = () => {
        setFondocrossfit(cross3);
    };

    return(
        <div id='tusactividades' className="main2 dark:bg-gradient-to-r from-gray-600 to-gray-800 bg-orange-500 relative">
            {/* <img className='w-full h-24 absolute top-0 dark:opacity-5' src={'https://www.hammer.ar/image/logohammerorange.png'} alt="Logo" /> */}
            <img className='w-8 h-80 absolute top-10 left-0 dark:hidden' src={'https://www.hammer.ar/image/guiones1.png'} alt="Guiones" />
            <img className='w-8 h-80 absolute bottom-10 right-0 dark:hidden' src={'https://www.hammer.ar/image/guiones1.png'} alt="Guiones" />
        <div className='cont2 text-black dark:text-white' id='servs1' >
            <div className='triangulo-l'></div>
            <div className='triangulo-r'></div>
            <h1 data-aos="fade-up" >Tus Actividades</h1>
            <p data-aos="fade-up">Explora un abanico de servicios diseñados para transformar tu experiencia de fitness. Desde entrenamientos personalizados hasta clases vibrantes, cada servicio en nuestra oferta está diseñado para llevar tu bienestar a nuevas alturas. Únete a nosotros y descubre cómo podemos personalizar tu viaje hacia una vida activa y saludable.</p>
            <div className='serv'>
                <div className='contenedor'>
                    <div data-aos="fade-right" id='servicio' className='musculacion'><p>Musculación</p><a href="#vermas"><button onClick={verMusculacion}>Ver más</button></a></div>
                    <div data-aos="fade-right" id='servicio' className='cardio'><p>Cardio</p><a href="#vermas"><button onClick={verCardio}>Ver más</button></a></div>
                    <div data-aos="fade-left" id='servicio' className='yoga'><p>Clases grupales</p><a href="#vermas"><button onClick={verYoga}>Ver más</button></a></div>
                    <div data-aos="fade-left" id='servicio' className='crossfit'><p>Bajo impacto</p><a href="#vermas"><button onClick={verCrossfit}>Ver más</button></a></div>
                    <div data-aos="fade-left" id='servicio' className='kids'><p>Kids</p><a href="#vermas"><button onClick={verKids}>Ver más</button></a></div>
                </div>
            </div>
        </div>
        {
            servicio === 'musculacion' && (
                <>
                    <div id='vermas' className='espacio'></div> {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
                    <div className='vermas'>
                        <div className='verMasMusc'>
                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                            <div className='vermasbox'>
                                <div className='images'style={{ backgroundImage: `url(${fondomusculacion})` }}>
                                    <ul>
                                        <li onClick={cambiarFonduMusc}></li>
                                        <li onClick={cambiarFonduMusc2}></li>
                                        <li onClick={cambiarFonduMusc3}></li>
                                    </ul>
                                    <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                </div>
                                <div className='vermas-cont'>
                                    <h1>Musculación</h1>
                                    <p>¿Primera vez entrenando o ya contas con experiencia? No te preocupes, porque en nuestros salones de musculación vas a contar con una gran variedad y calidad de máquinas y pesos libres para entrenar la fuerza, aumentar la musculatura y tonificar el cuerpo. Siempre guiad@ por nuestros instructores y además dispondrás de diferentes rutinas pensadas para que arranques de 0 y para desafiarte todos los días.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )

        }
        {
            servicio === 'cardio' && (
                <>
                    <div id='vermas' className='espacio'></div> {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
                    <div className='vermas'>
                        <div className='verMasMusc'>
                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                            <div className='vermasbox'>
                                <div className='images'style={{ backgroundImage: `url(${fondocardio})` }}>
                                    <ul>
                                        <li onClick={cambiarFonduCardio}></li>
                                        <li onClick={cambiarFonduCardio2}></li>
                                        <li onClick={cambiarFonduCardio3}></li>
                                    </ul>
                                    <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                </div>
                                <div className='vermas-cont'>
                                    <h1>Cardio</h1>
                                    <p>¿Pensas que hacer cardio es aburrido? Con nuestro plan de musculacion tambien tendrás a disposición todos nuestros equipos de cardio, cintas, bicis, elípticos, remos, airbikes, entre otros, para que elijas el más divertido y apto para vos, con los que podras quemar todas las calorías que te propongas, o bien para calentar un ratito antes de comenzar tu rutina.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )
        }
        {
            servicio === 'yoga' && (
                <>
                    <div id='vermas' className='espacio'></div> {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
                    <div className='vermas'>
                        <div className='verMasMusc'>
                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                            <div className='vermasbox'>
                                <div className='images'style={{ backgroundImage: `url(${fondoyoga})` }}>
                                    <ul>
                                        <li onClick={cambiarFondoYoga}></li>
                                        <li onClick={cambiarFondoYoga2}></li>
                                        <li onClick={cambiarFondoYoga3}></li>
                                    </ul>
                                    <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                </div>
                                <div className='vermas-cont'>
                                    <h1>Clases grupales</h1>
                                    <p>¿Y si probas entrenando en compañía con nuestras clases grupales? Crossfit, Funcional, Zumba, Aerobics y muchas otras actividades para que puedas elegir según tu gusto y tus objetivos, siempre vas a tener a tu disposición coachs que te van a orientar para que arranques desde el nivel más básico o para perfeccionarte si ya contas con experiencia previa. ¡Consulta las clases disponibles en tu sede! Si sentís que las actividades individuales no son para vos aquí encontraras tu lugar 😀</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )

        }
        {
            servicio === 'crossfit' && (
                <>
                    <div id='vermas' className='espacio'></div> {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
                    <div className='vermas'>
                        <div className='verMasMusc'>
                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                            <div className='vermasbox'>
                                <div className='images'style={{ backgroundImage: `url(${fondocrossfit})` }}>
                                    <ul>
                                        <li onClick={cambiarFonduCross}></li>
                                        <li onClick={cambiarFonduCross2}></li>
                                        <li onClick={cambiarFonduCross3}></li>
                                    </ul>
                                    <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                </div>
                                <div className='vermas-cont'>
                                    <h1>Salas de clases de bajo impacto</h1>
                                    <p>¿Sabías que también contamos con clases de bajo impacto? Pilates, Yoga y talleres para 3era edad (consulta las disponibles en tu sede). Vas a trabajar sin impacto para fortalecer todo tu cuerpo, mejorar postura y recuperar la movilidad perdida. Son ideales para aumentar la fuerza y flexibilidad, rehabilitarte de lesiones, complementar y especializarte en otras actividades y para conectar la mente con tu cuerpo 🧘</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )
        }
        {
            servicio === 'kids' && (
                <>
                    <div id='vermas' className='espacio'></div> {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
                    <div className='vermas'>
                        <div className='verMasMusc'>
                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                            <div className='vermasbox'>
                                <div className='images'style={{ backgroundImage: `url(${fondocrossfit})` }}>
                                    <ul>
                                        <li onClick={cambiarFonduCross}></li>
                                        <li onClick={cambiarFonduCross2}></li>
                                        <li onClick={cambiarFonduCross3}></li>
                                    </ul>
                                    <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                </div>
                                <div className='vermas-cont'>
                                    <h1>Actividades Kids</h1>
                                    <p>¿Sabías lo importante que es la actividad física en los niños? Por eso contamos con diferentes actividades grupales para ellos. Todas están guiadas por profes y pensadas para divertirse, y para acompañar su desarrollo tanto físico como social, desde las etapas más tempranas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )
        }
    </div>
    )
}

export default Servicios;