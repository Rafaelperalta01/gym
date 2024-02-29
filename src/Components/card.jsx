import React, { useState } from 'react';

const FixedCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed  border border-gray-300 rounded p-4 transition-all bg-[#e79e4be1] text-black backdrop-filter backdrop-blur-lg ${
        isHovered ? 'w-2/6 h-80' : 'w-12 h-80'
      }`}
      style={{
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        transitionDuration: '0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer">
        {/* <img src="https://www.bing.com/th?id=OIP.YmlELtR4lDaPAkGT8xx6owHaFy&w=150&h=118&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /> */}
      </div>
      {isHovered && (
        <div className="mt-2">
          {/* Contenido de tu tarjeta aquí */}
          <p>Contenido de la tarjeta</p>
        </div>
      )}
    </div>
  );
};

export default FixedCard;