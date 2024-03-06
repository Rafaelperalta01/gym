import React, { useState } from 'react';

const FreeClassForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    dni: '',
    hammer: '',
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
      nombre: '',
      apellido: '',
      celular: '',
      dni: '',
      hammer: '',
    });
    // Cerrar el formulario
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl text-orange-500 font-bold mb-4">Quiero una clase gratis</h2>
        <form className='bg-orange-600 p-5' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-1 text-white">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="border border-gray-400 rounded h-8 px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block mb-1 text-white">Apellido:</label>
            <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className="border border-gray-400 rounded h-8 px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="celular" className="block mb-1 text-white">Número de celular:</label>
            <input type="text" id="celular" name="celular" value={formData.celular} onChange={handleChange} className="border border-gray-400 rounded h-8 px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="dni" className="block mb-1 text-white">DNI:</label>
            <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} className="border border-gray-400 rounded h-8 px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-white">En qué Hammer quieres entrenar:</label>
            <select name="hammer" value={formData.hammer} onChange={handleChange} className="border border-gray-400 rounded px-4 py-2 w-full">
              <option value="">Selecciona una opción</option>
              <option value="Concepción">Concepción</option>
              <option value="Monteros">Monteros</option>
            </select>
          </div>
          <button type="submit" className="bg-gray-100 text-black py-2 px-4 rounded hover:bg-gray-300">Programar</button>
        </form>
      </div>
    </div>
  );
};

export default FreeClassForm;