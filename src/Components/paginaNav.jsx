import '../styles/paginaNav.css';
import { Link } from 'react-router-dom';

export default function PaginaNav({ link1, link2, link3, link4 }){
    return(
        <>
            <nav className='nav'>
                <ul className='ul'>
                    <Link to={`/celulares/${link1}`}>
                        <li className='pag-li'>{link1}</li>
                    </Link>
                    
                    <Link to={`/celulares/${link2}`}>
                        <li className='pag-li'>{link2}</li>
                    </Link>

                    <Link to={`/celulares/${link3}`}>
                        <li className='pag-li'>{link3}</li>
                    </Link>

                    <Link to={`/celulares/${link4}`}>
                        <li className='pag-li'>{link4}</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
}
