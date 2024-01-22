import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/marcas.css' //estilos para personalizar el componente Slider
import Puntitos from './puntitos';

const Marcas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="h-48 p-10 gap-8  bg-gray-200 flex flex-col  dark:bg-gray-400 overflow-hidden">
        <div className='mt-[-25px] text-center'>
            <Puntitos />
            <h1 className="text-2xl font-black float-left text-orange-600 font-pt-sans px-5 dark:text-white">Nuestros comercios amigos</h1>
        </div>
      
        <Slider className=' ' {...settings}>
        <div  title="sin página">
          <img className="h-10 " src="https://www.hammer.ar/image/comercio1.png" alt="" />
        </div>
        <div >
          <a className="cursor-pointer" href="https://gerf.com.ar" target="_blank" rel="noreferrer">
            <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio2.png" alt="" />
          </a>
        </div>
        <div >
          <a className="cursor-pointer" href="https://confiterialaestrella.com" target="_blank" rel="noreferrer">
            <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio3.png" alt="" />
          </a>
        </div>
        <div  title="sin página">
          <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio4.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio5.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-10 w-auto " src="https://www.hammer.ar/image/comercio6.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-10  w-auto" src="https://www.hammer.ar/image/comercio7.png" alt="" />
        </div>
      </Slider>

      
    </div>
  );
}

export default Marcas;
