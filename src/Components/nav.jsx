
import React from 'react';
import logo from '../images/logo.png';
import '../styles/nav.css';

export default function Nav() {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt="" />
      <div className='links'>
        <ul>
          <a href="#main1" className='f'><li>Inicio</li></a>
          <a href="#servs1" className='f'><li>Programa</li></a>
          <a href="#333" className='f'><li>Eleginos</li></a>
          <a href="#listadoprecios" className='f'><li>Precios</li></a>
          <a href="#main5" className='f'><li>Coaches</li></a>
        </ul>
      </div>
    </div>
  );
}