import { useEffect, useState } from 'react'
import '../styles/main.css'
import close from '../images/delete.png'
import trainer from '../images/trainer.png'
import machine from '../images/machine.png'
import miembros from '../images/muscle.png'
import nutricion from '../images/plan.png'
import wsp from '../images/whatsapp.png'
import insta from '../images/instagram.png'
import gmail from '../images/gmail.png'
import logo from '../images/logo.png'
import Card from '../Components/cardprecio'
import Aos from 'aos'
import Coach, { Coach2 } from '../Components/coach'


export default function Main() {

    useEffect(() => {
        Aos.init({ duration: 1000, delay: '200' })
    }, [])

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
    const cerrarVentana = () => {
        setServicio('')
    }

    return (
        <div className='box-padre'>
            <div className='main1' id='main1'>
                <div className='parrafos' data-aos="fade-down">
                    <h1>Espartans Gym</h1>
                    <p>"Tu cuerpo es tu inversión más valiosa. Únete a nosotros y comienza a cosechar los beneficios de una vida activa y saludable."</p>
                    <div className='btn-main1'>
                        <button>Comenzar ahora</button>
                    </div>

                </div>
                <div className="datos" data-aos="fade-down">
                    <div className='dato'><p>+ 20 <br />Entrenadores</p></div>
                    <div className='dato'><p>+ 800 <br />Miembros</p></div>
                    <div className='dato'><p>+ 50 <br /> Programas</p></div>
                </div>
            </div>

            <div className="main2">
                <div className='cont2' id='servs1' >
                    <h1 data-aos="fade-up">Nuestros <b>servicios</b></h1>
                    <p data-aos="fade-up">Explora un abanico de servicios diseñados para transformar tu experiencia de fitness. Desde entrenamientos personalizados hasta clases vibrantes, cada servicio en nuestra oferta está diseñado para llevar tu bienestar a nuevas alturas. Únete a nosotros y descubre cómo podemos personalizar tu viaje hacia una vida activa y saludable.</p>
                    <div className='serv'>
                        <div data-aos="zoom-out-up" className='contenedor'>
                            <div data-aos="fade-right" id='servicio' className='musculacion'><p>Musculación</p><a href="#vermas"><button onClick={verMusculacion}>Ver más</button></a></div>
                            <div data-aos="fade-right" id='servicio' className='cardio'><p>Cardio</p><a href="#vermas"><button onClick={verCardio}>Ver más</button></a></div>
                            <div data-aos="fade-left" id='servicio' className='yoga'><p>Yoga</p><a href="#vermas"><button onClick={verYoga}>Ver más</button></a></div>
                            <div data-aos="fade-left" id='servicio' className='crossfit'><p>CrossFit</p><a href="#vermas"><button onClick={verCrossfit}>Ver más</button></a></div>
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
                                        <div className='images'>
                                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                        </div>
                                        <div className='vermas-cont'>
                                            <h1>Musculación</h1>
                                            <p>Nuestros servicios de musculación van más allá de levantar pesas; son una invitación a la transformación física y al empoderamiento personal. Desde rutinas personalizadas hasta un amplio abanico de máquinas de última generación, te proporcionamos todo lo que necesitas para alcanzar tus objetivos de fuerza y definición muscular.</p>
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
                                        <div className='images'>
                                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                        </div>
                                        <div className='vermas-cont'>
                                            <h1>Cardio</h1>
                                            <p>Únete a nuestra comunidad de amantes del cardio, donde cada latido cuenta y cada sesión te acerca a un estado físico y mental óptimo. Experimenta cómo el cardio no solo mejora tu salud cardiovascular, sino que también libera la tensión diaria, fortalece tu resistencia y te impulsa hacia un estilo de vida activo y saludable.</p>
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
                                        <div className='images'>
                                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                        </div>
                                        <div className='vermas-cont'>
                                            <h1>Yoga</h1>
                                            <p>En este espacio sagrado, nuestros instructores certificados te guiarán a través de respiraciones conscientes, movimientos fluidos y la búsqueda de la paz interior. La filosofía del yoga se entrelaza con cada sesión, promoviendo la flexibilidad, el equilibrio y la conexión con tu yo más profundo.</p>
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
                                        <div className='images'>
                                            <a href="#servs1"><img src={close} className='img-close' onClick={cerrarVentana} alt="Cerrar Ventana" /></a>
                                        </div>
                                        <div className='vermas-cont'>
                                            <h1>CrossFit</h1>
                                            <p>En la sección de CrossFit, sumérgete en una experiencia única que redefine los límites de tu rendimiento físico y mental. Nuestros programas de CrossFit no solo son entrenamientos, son desafíos que te inspirarán a superar tus propios límites día tras día. Cada sesión está diseñada para construir fuerza, resistencia y agilidad.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    )

                }
            </div>
            <div className='main3' id='333'>
                <div className="fondo">
                    <div className="cont3">
                        <div className='caja'>
                            <div className="main3-parrafos">

                                <div className='parrafos3'>
                                    <h1 data-aos="fade-up">¿Por qué <b>elegirnos</b>?</h1>
                                    <p data-aos="fade-up">Nuestra atención es <b>personalizada</b>. Valoramos a cada miembro de nuestra comunidad y reconocemos la singularidad de cada <b>cuerpo</b>. Desde la creación de planes de entrenamiento adaptados hasta el seguimiento continuo de tu <b>progreso</b>, te brindamos una atención <b>individualizada</b> que marca la diferencia en tu experiencia fitness.</p>
                                </div>
                                <div className='main3-cards'>
                                    <div data-aos="zoom-in-left">
                                        <img className='img-card3' src={trainer} alt="Entrenadores" />
                                        <p className="title">entrenadores altamente calificados</p>
                                    </div>
                                    <div data-aos="zoom-in-left">
                                        <img className='img-card3' src={machine} alt="Maquinas" />
                                        <p className="title">+ de 100 máquinas última generación</p>
                                    </div>
                                    <div data-aos="zoom-in-left">
                                        <img className='img-card3' src={miembros} alt="Miembros" />
                                        <p className="title">+ de 800 miembros</p>
                                    </div>
                                    <div data-aos="zoom-in-left">
                                        <img className='img-card3' src={nutricion} alt="Nutricion" />
                                        <p className="title"> equipo de nutricionistas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="main4" id='listadoprecios'>
                <div className="padre4">
                    <div className="text-main4">
                        <p data-aos="fade-up">Tablas de precios</p>
                        <h1 data-aos="fade-up"><b>Nuestros</b> planes</h1>
                    </div>
                    <div className="main4-cont">
                        <Card nombre={'Basic'} precio={3500} b1={true} b2={true} b3={false} b4={false} b5={false} b6={false} />
                        <Card nombre={'Estandar'} precio={4500} b1={true} b2={true} b3={true} b4={true} b5={false} b6={false} />
                        <Card nombre={'Premium'} precio={6500} b1={true} b2={true} b3={true} b4={true} b5={true} b6={true} />
                    </div>
                </div>
            </div>
            <div className="main5">
                <div className='main5-box'>
                    <div className='main5-cont'>
                        <p className='main5-title' data-aos="fade-down" id='main5'><span>Conoce nuestros</span> coaches</p>
                        <div className="container-coach">
                            <Coach />
                            <Coach2 />
                        </div>
                        <p className='parrafo-coachs' data-aos="fade-right" data-aos-duration="8000">En Spartans Gym, nuestros coaches son tu clave para el éxito fitness. Desde entrenamiento de fuerza hasta yoga, cada uno está comprometido a guiarte hacia tus metas. Descubre el impulso y apoyo que necesitas para alcanzar tu mejor versión. ¡Bienvenido a la excelencia en cada entrenamiento!</p>
                    </div>
                </div>

            </div>
            <div className='main6'>
                <footer>
                    <div className="img-footer" data-aos="fade-up" >
                        <img className='logo-footer' src={logo} alt="Logo" />
                    </div>
                    <p data-aos="fade-up" >Transforma tu vida con Spartans Gym. Encuentra tu fuerza, equilibrio y bienestar con nosotros.</p>
                    <div className='footer-links' data-aos="fade-up" >
                        <div className='foot-link'> <a href="#main1">Home</a></div>
                        <div className='foot-link'> <a href="#servs1">Services</a></div>
                        <div className='foot-link'> <a href="#333">About</a></div>
                        <div className='foot-link'> <a href="#listadoprecios">Prices</a></div>
                        <div className='foot-link'> <a href="#main5">Coaches</a></div>
                    </div>
                    <div className='re' data-aos="fade-up" >
                        <div><img className='redes' src={wsp} alt="WhatssApp" /></div>
                        <div><img className='redes' src={insta} alt="Instagram" /></div>
                        <div><img className='redes' src={gmail} alt="Instagram" /></div>
                    </div>
                    <div className="msj-final" data-aos="fade-up" >
                        <p>© 2024 Todos los derechos reservados.</p>
                        <p>Created by SoftFusion</p>
                    </div>

                </footer>
            </div>
        </div>
    )
}
