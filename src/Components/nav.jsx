
import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/nav.css';
import menuIcon from '../images/menu.png'


export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cerrarNav = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <div className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <img className='logo' src={logo} alt="Logo" />
      <div className='links'>
        <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <a href="#main1" className='f'><li onClick={cerrarNav}>Inicio</li></a>
          <a href="#servs1" className='f'><li onClick={cerrarNav}>Programa</li></a>
          <a href="#333" className='f'><li onClick={cerrarNav}>Eleginos</li></a>
          <a href="#listadoprecios" className='f'><li onClick={cerrarNav}>Precios</li></a>
          <a href="#main5" className='f'><li onClick={cerrarNav}>Coaches</li></a>
        </ul>
      </div>
      <img className='menu' src={menuIcon} alt="Menu" onClick={toggleMenu} />
    </div>
  );
}
