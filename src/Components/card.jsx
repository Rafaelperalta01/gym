import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FreeClassForm from '../Components/formclassfree'; // Importa el componente FreeClassForm
import Formtrabajar from './formtrabajar';

const FixedCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSedeButtons, setShowSedeButtons] = useState(false);
  const [showFreeClassForm, setShowFreeClassForm] = useState(false); // Estado para controlar la visibilidad del formulario de clase gratis
  const [showJobForm, setShowJobForm] = useState(false); // Estado para controlar la visibilidad del formulario de solicitud de empleo

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
    }, 1500);
  };

  const handleSedesClick = () => {
    setShowSedeButtons(!showSedeButtons); // Toggle visibility
  };

  const handleOpenFreeClassForm = () => {
    setShowFreeClassForm(true); // Abrir el formulario de clase gratis al hacer clic en "Quiero una clase gratis"
  };

  const handleCloseFreeClassForm = () => {
    setShowFreeClassForm(false); // Cerrar el formulario de clase gratis
  };

  const handleOpenJobForm = () => {
    setShowJobForm(true); // Abrir el formulario de solicitud de empleo al hacer clic en "Quiero trabajar con ustedes"
  };

  const handleCloseJobForm = () => {
    setShowJobForm(false); // Cerrar el formulario de solicitud de empleo
  };

  return (
    <>
      <div
        className={`fixed border border-gray-300 rounded-xl p-4 transition-all bg-gradient-to-r from-orange-500 to-orange-600 text-black z-50 ${
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
          <div className="text-white text-center font-tilt-neon">
            {/* Contenido de tu tarjeta aquí */}
            <p className='text-xl'>Todo lo que necesitas saber para entrenar con nosotros en un solo lugar.</p>
            <ul className='font-roboto mt-5 flex flex-col gap-5 mt-5'>
              <li className='cursor-pointer linkbox transition hover:text-gray-200'>Vos en el centro de la escena</li>
              <a href="#tusactividades"><li className='cursor-pointer linkbox transition hover:text-gray-200'>Tus actividades</li></a>
              <li className='cursor-pointer linkbox transition hover:text-gray-200' onClick={handleSedesClick}>Nuestras sedes</li>
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
              <li className='cursor-pointer linkbox transition hover:text-gray-200' onClick={handleOpenJobForm}>Quiero trabajar con ustedes</li>
              <li className='cursor-pointer linkbox transition hover:text-gray-200' onClick={handleOpenFreeClassForm}>Quiero una clase gratis</li>
            </ul>
          </div>
        ) : null}
      </div>
      {isScrolled && (
        <div onClick={handleOpenFreeClassForm} className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 cursor-pointer hover:bg-gray-700 z-50">
          Quiero probar una clase gratis
        </div>
      )}
      {/* Renderizar el formulario de clase gratis si showFreeClassForm es true */}
      <FreeClassForm isOpen={showFreeClassForm} onClose={handleCloseFreeClassForm} />
      {/* Renderizar el formulario de solicitud de empleo si showJobForm es true */}
      <Formtrabajar isOpen={showJobForm} onClose={handleCloseJobForm} />
    </>
  );
};

export default FixedCard;