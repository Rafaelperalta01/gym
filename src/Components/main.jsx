import '../styles/main.css';
import img from '../images/imagenesMain/imagen-main.jpg';
import img2 from '../images/imagenesMain/pc.png';
import img3 from '../images/imagenesMain/pc2.png';
import img4 from '../images/imagenesMain/pc4.png';
import imgcontrol from '../images/imagenesMain/control.webp';
import imgControl2 from '../images/imagenesMain/control2.png';
import imgAuris from '../images/imagenesMain/auris.png';
import imgCamara from '../images/imagenesMain/camara.png';
import Btn from './btn-main';

export default function Main(){

    
    return(
        <div className='main'>
            <div className='main-1'>
                <p className='main-parrafo1'>¡Bienvenido a Cell Market, el lugar perfecto para encontrar el celular que necesitas!</p>
                <img className='main-img1' src={img} />
                <Btn mensaje='Ir a Celulares'/>
            </div>
            <div className='main-2'>
                <p className='main-parrafo2'>¿Buscas un equipo confiable para tus proyectos? ¡Tenemos los mejores notebooks para ti!</p>
                <div className='main2-animacion'>
                    <div className='circulo'></div>
                    <img className='main-img2' src={img2}/>
                    <img className='main-img3' id='img3' src={img3}/>
                    <img className='main-img4' src={img4}/>
                </div>
                <Btn mensaje='Ir a Notebooks' margintop={180}/>
            </div>
            <img className='img-control' src={imgcontrol} alt="" />
            <div className='main3'>
                <p className='main-parrafo3'>¡Cell Market tiene la mejor selección de juegos y accesorios para vos!</p>
                <div className='main3-imgs'>
                    <img className='main-img5' src={imgControl2} alt="" />
                    <img className='main-img7' src={imgCamara} alt="" />
                    <img className='main-img6' src={imgAuris} alt="" />
                </div>
                <p className='main-parrafo4'>Ofrecemos una amplia selección de accesorios para tu PlayStation, desde controles inalámbricos hasta auriculares con sonido envolvente, para que puedas disfrutar de una experiencia de juego más completa.</p>
                <div className='main3-btn'>
                    <Btn mensaje='Ir a Juegos' margintop={70}/>
                </div>
                
            </div>
        </div>
    );
}
