import React, { useState } from 'react';
import theme from '../images/theme.png';
import Menu from './logomenu';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="justify-between w-full dark:bg-gray-500  fixed z-50">
      <div className="h-12 flex w-full bg-white justify-between items-center py-8 px-10 z-10 dark:bg-transparent ">
        <div>
          <img className="h-6" src="https://www.hammer.ar/image/logohammerorange.png" alt="Logo" />
        </div>

        <div className="hidden flex items-center font-tilt-neon text-black gap-10 lg:flex space-x-4 dark:text-white">
          <a href="https://www.spartansgym.netlify.app" className="">
            Home
          </a>
          <a href="#about" className="">
            ¿Quiénes somos?
          </a>
          <a href="#testi" className="">
            Contacto
          </a>
          <a href="#testi" className=''>
            <button  className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
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
        <div className="h-auto absolute bg-[#fffc] text-black backdrop-filter backdrop-blur-lg pb-5 w-full z-15 lg:hidden bg-transparent px-8 z-50 dark:text-white dark:bg-[#90939ed7] dark:backdrop-filter dark:backdrop-blur-lg">
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
// {isMobileMenuOpen && (
//     <div className="h-auto absolute bg-[#fff8] text-black backdrop-filter backdrop-blur-md py-2 w-full z-15 lg:hidden bg-transparent px-16 z-50 dark:text-white">
//       <a href="#" className="block py-2 px-4 ">
//         Home
//       </a>
//       <a href="#" className="block py-2 px-4 ">
//         ¿Quiénes somos?
//       </a>
//       <a href="#" className="block py-2 px-4 ">
//         Contacto
//       </a>
//       <a href="#" className="block py-2 px-4 ">
//         Comenzar
//       </a>
//       <div className='ml-4'>
//         <a href="#" className="">
//             <img onClick={toggleDarkMode} className="h-7 mt-2 cursor-pointer dark:invert" src={theme} alt="Theme" />
//         </a>
//       </div>
      
//     </div>
//   )}


// import theme from '../images/theme.png'


// const Navbar = () => {

//     const toggleDarkMode = () => {
//         document.documentElement.classList.toggle("dark");
//       };
    

//     return(
//         <nav data-aos="fade-down" className="h-12 flex justify-between items-center px-10 pr-14 z-10 ">
//             <div>
//                 <img className="h-6" src="https://www.hammer.ar/image/logohammerorange.png" alt="Logo" />
//             </div>
//             <div>
//                 <ul className="flex gap-14 text-black font-tilt-neon dark:text-white">
//                     <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
//                         Home
//                     </li>
//                     <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
//                         ¿Quiénes somos?
//                     </li>
//                     <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
//                         Contacto
//                     </li>
                    
//                         <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
//                             Comenzar
//                         </button>
//                     <img onClick={toggleDarkMode} className='h-7 mt-2 cursor-pointer dark:invert' src={theme} alt="Theme" />
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;