import React, { useState } from 'react';

const Formtrabajar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    celular: '',
    edad: '',
    instagram: '',
    puesto: '',
    sede: '',
    presentacion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que desees con los datos del formulario
    console.log('Formulario enviado:', formData);
    // Limpiar el formulario después de enviarlo
    setFormData({
      nombreCompleto: '',
      email: '',
      celular: '',
      edad: '',
      instagram: '',
      puesto: '',
      sede: '',
      presentacion: '',
    });
    // Cerrar el formulario
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-7 max-w-md w-full relative shadow-md">
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-lg font-bold mb-4 text-orange-500">¡Quiero formar parte del equipo Hammer!</h2>
        <form className='bg-orange-600 p-5 text-sm' onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" id="nombreCompleto" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} className=" border border-gray-400 rounded p-1 pl-3 w-full" placeholder="Nombre Completo" />
          </div>
          <div className="mb-3">
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 rounded p-1 pl-3 w-full" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="text" id="celular" name="celular" value={formData.celular} onChange={handleChange} className="border border-gray-400 rounded p-1 pl-3 w-full" placeholder="Número de Celular" />
          </div>
          <div className="mb-3">
            <input type="text" id="edad" name="edad" value={formData.edad} onChange={handleChange} className="border border-gray-400 rounded p-1 pl-3 w-full" placeholder="Edad" />
          </div>
          <div className="mb-3">
            <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} className="border border-gray-400 rounded p-1 pl-3 w-full" placeholder="Instagram" />
          </div>
          <div className="mb-3">
            <select name="puesto" value={formData.puesto} onChange={handleChange} className="border border-gray-400 rounded p-1  w-full">
              <option value="">Quiero trabajar de:</option>
              <option value="Recepcionista">Recepcionista</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Instructor de Musculación">Instructor de Musculación</option>
              <option value="Coach de Clases Grupales">Coach de Clases Grupales</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Mantenimiento">Mantenimiento</option>
              <option value="Marketing">Marketing</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="mb-3">
            <select name="sede" value={formData.sede} onChange={handleChange} className="border border-gray-400 rounded p-1  w-full">
              <option value="">Sede:</option>
              <option value="Concepción">Concepción</option>
              <option value="Monteros">Monteros</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea id="presentacion" name="presentacion" value={formData.presentacion} onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" placeholder="Contanos un poco sobre vos en menos de 100 palabras" rows="4" maxLength="100"></textarea>
          </div>
          <button type="submit" className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formtrabajar;