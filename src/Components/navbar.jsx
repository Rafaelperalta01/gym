import React, { useState } from 'react';
import theme from '../images/theme.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="justify-between w-full dark:bg-gray-500 py-3">
      <div className="h-12 flex w-full bg-transparent justify-between items-center px-20 pr-14 z-10 dark:bg-transparent ">
        <div>
          <img className="h-6" src="https://www.hammer.ar/image/logohammerorange.png" alt="Logo" />
        </div>

        <div className="hidden flex items-center font-tilt-neon text-black gap-10 lg:flex space-x-4 dark:text-white">
          <a href="https://www.spartansgym.netlify.app" className="">
            Home
          </a>
          <a href="https://www.spartansgym.netlify.app" className="">
            ¿Quiénes somos?
          </a>
          <a href="https://www.spartansgym.netlify.app" className="">
            Contacto
          </a>
          <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
            Comenzar
          </button>
          <a href="https://www.spartansgym.netlify.app" className="">
            <img onClick={toggleDarkMode} className="h-7 mt-2 cursor-pointer dark:invert" src={theme} alt="Theme" />
          </a>
        </div>

        <div className="lg:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6 invert dark:invert-0"
              fill="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="h-auto absolute bg-[#fffb] text-black backdrop-filter backdrop-blur-lg pb-5 w-full z-15 lg:hidden bg-transparent px-16 z-50 dark:text-white bg-[#fff5] text-black backdrop-filter backdrop-blur-md">
          <a href="https://www.spartansgym.netlify.app" className="block py-2 px-4 ">
            Home
          </a>
          <a href="https://www.spartansgym.netlify.app" className="block py-2 px-4 ">
            ¿Quiénes somos?
          </a>
          <a href="https://www.spartansgym.netlify.app" className="block py-2 px-4 ">
            Contacto
          </a>
          <a href="https://www.spartansgym.netlify.app" className="block py-2 px-4 ">
            Comenzar
          </a>
          <div className='ml-4'>
            <a href="https://www.spartansgym.netlify.app" className="">
                <img onClick={toggleDarkMode} className="h-7 mt-2 cursor-pointer dark:invert" src={theme} alt="Theme" />
            </a>
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