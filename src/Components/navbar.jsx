import React, { useState } from 'react';
import theme from '../images/theme.png';
import Menu from './logomenu';
import '../styles/animacionlinks.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="justify-between w-full dark:bg-gradient-to-r from-gray-600 to-gray-900  fixed z-50">
      <div className="h-12 flex w-full bg-white justify-between items-center py-8 px-10 z-10 dark:bg-transparent ">
        <div className='flex gap-5 pt-2'>
          <div title="sin página">
            <img className="h-8 " src="https://www.hammer.ar/image/comercio1.png" alt="" />
          </div>
          <div >
            <a className="cursor-pointer" href="https://gerf.com.ar" target="_blank" rel="noreferrer">
              <img className="h-8 w-auto" src="https://www.hammer.ar/image/comercio2.png" alt="" />
            </a>
          </div>
          <div >
            <a className="cursor-pointer" href="https://confiterialaestrella.com" target="_blank" rel="noreferrer">
              <img className="h-8 w-auto" src="https://www.hammer.ar/image/comercio3.png" alt="" />
            </a>
          </div>
          <div title="sin página">
            <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio4.png" alt="" />
          </div>
          <div title="sin página">
            <img className="h-8 w-auto" src="https://www.hammer.ar/image/comercio5.png" alt="" />
          </div>
          <div title="sin página">
            <img className="h-12 w-auto " src="https://www.hammer.ar/image/comercio6.png" alt="" />
          </div>
          <div title="sin página">
            <img className="h-10  w-auto" src="https://www.hammer.ar/image/comercio7.png" alt="" />
          </div>
        </div>

        <div className="hidden flex items-center font-tilt-neon text-black gap-10 lg:flex space-x-4 dark:text-white">
          <a href="#!" className="link">
            Home
          </a>
          <a href="#about" className="link">
            ¿Quiénes somos?
          </a>
          <a href="#testi" className="link">
            Contacto
          </a>
          <a href="#testi" className=''>
            <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
              Comenzar
            </button>
          </a>

          <img onClick={toggleDarkMode} className="h-7 mt-2 cursor-pointer dark:invert" src={theme} alt="Theme" />

        </div>

        <div className="lg:hidden">
          <button id="menu-toggle" className=" relative" onClick={toggleMobileMenu}>
            <Menu /> {/* menú*/}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="h-auto absolute bg-[#fffc] text-black backdrop-filter backdrop-blur-lg pb-5 w-full z-15 lg:hidden px-8 z-50 dark:text-white dark:bg-[#90939ed7] dark:backdrop-filter dark:backdrop-blur-lg">
          <a href="#home" className="block py-2 px-4 ">
            Home
          </a>
          <a href="#about" className="block py-2 px-4 ">
            ¿Quiénes somos?
          </a>
          <a href="#testi" className="block py-2 px-4 ">
            Contacto
          </a>
          <a href="#testi" className="block py-2 px-4 ">
            Comenzar
          </a>
          <div className='ml-4'>
            <img onClick={toggleDarkMode} className="h-7 mt-2 cursor-pointer dark:invert" src={theme} alt="Theme" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
