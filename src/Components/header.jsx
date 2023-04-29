import '../styles/header.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="header_nav">
            <Link to={'/'} className='li'> 
                <h2 className='header_titulo'>CellMarket2.0</h2>
            </Link>
            <ul className="header_ul">
                <Link to={'/celulares'} className='li'>
                    <li>Celulares</li>
                </Link>
                <Link to={'/notebooks'} className='li'>
                    <li className="li_notebooks">Notebooks</li>
                </Link>
                <Link to={'/juegos'} className='li'>
                    <li>Accesorios y Juegos</li>
                </Link>
            </ul>
        </nav>
    );
}

