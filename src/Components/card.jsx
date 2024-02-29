import React, { useState, useEffect } from 'react';

const FixedCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    }, 2000); // 3000 milisegundos = 3 segundos
  };

  return (
    <div
      className={`fixed border border-gray-300 rounded p-4 transition-all bg-[#e79e4be1] text-black backdrop-filter backdrop-blur-lg z-50 ${
        isHovered || !isScrolled ? 'w-2/6 h-80' : 'w-0 h-80'
      }`}
      style={{
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        transitionDuration: '0.3s',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer">
        {/* <img src="https://www.bing.com/th?id=OIP.YmlELtR4lDaPAkGT8xx6owHaFy&w=150&h=118&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /> */}
      </div>
      {isHovered && (
        <div className="">
          {/* Contenido de tu tarjeta aquí */}
          <p>Contenido de la tarjeta</p>
        </div>
      )}
    </div>
  );
};

export default FixedCard;