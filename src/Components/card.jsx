import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FixedCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSedeButtons, setShowSedeButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const handleSedesClick = () => {
    setShowSedeButtons(!showSedeButtons); // Toggle visibility
  };

  return (
    <>
      <div
        className={`fixed border border-gray-300 rounded p-4 transition-all bg-[#e46d1eee] text-black backdrop-filter backdrop-blur-lg z-50 ${
          isHovered || !isScrolled ? 'w-2/6 h-auto py-10' : 'w-0 h-80'
        }`}
        style={{
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          transitionDuration: '0.5s',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cursor-pointer">
          {/* <img src="https://www.bing.com/th?id=OIP.YmlELtR4lDaPAkGT8xx6owHaFy&w=150&h=118&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /> */}
        </div>
        {isHovered || !isScrolled ? (
          <div className="text-white text-center font-pt-sans">
            {/* Contenido de tu tarjeta aquí */}
            <p>Todo lo que necesitas saber para entrenar con nosotros en un solo lugar.</p>
            <ul className='font-roboto mt-5 flex flex-col gap-5'>
              <li className='cursor-pointer'>Vos en el centro de la escena</li>
              <a href="#tusactividades"><li className='cursor-pointer'>Tus actividades</li></a>
              <li className='cursor-pointer' onClick={handleSedesClick}>Nuestras sedes</li>
              {showSedeButtons && (
                <div className='flex mx-auto'>
                  <Link to={'/Concepcion'}>
                    <button className="bg-gray-200 hover:bg-gray-300 text-black  py-2 px-4 rounded mr-4">
                      Concepción
                    </button>
                  </Link>
                  <Link to={'/Monteros'}>
                    <button className="bg-gray-200 hover:bg-gray-300 text-black  py-2 px-4 rounded">
                      Monteros
                    </button>
                  </Link>
                </div>
              )}
              <li className='cursor-pointer'>Quiero trabajar con ustedes</li>
            </ul>
          </div>
        ) : null}
      </div>
      {isScrolled && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 cursor-pointer hover:bg-gray-700">
          Quiero probar una clase gratis
        </div>
      )}
    </>
  );
};

export default FixedCard;