import theme from '../images/theme.png'


const Navbar = () => {

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
      };
    

    return(
        <nav data-aos="fade-down" className="h-12 flex justify-between items-center px-10 pr-14 z-10 ">
            <div>
                <img className="h-6" src="https://www.hammer.ar/image/logohammerorange.png" alt="Logo" />
            </div>
            <div>
                <ul className="flex gap-14 text-black font-tilt-neon dark:text-white">
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
                        Home
                    </li>
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
                        About
                    </li>
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
                        Coaches
                    </li>
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-300 ease-in-out pt-2 z-10">
                        Contact
                    </li>
                    
                        <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
                            Get started
                        </button>
                    <img onClick={toggleDarkMode} className='h-7 mt-2 cursor-pointer dark:invert' src={theme} alt="Theme" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;