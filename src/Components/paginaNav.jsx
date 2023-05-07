import '../styles/paginaNav.css';
import { Link } from 'react-router-dom';

export default function PaginaNav({ pagina, link1, link2, link3, link4 }) {
  return (
    <nav className='nav'>
      <ul className='ul'>
        <li>
          <Link to={`/${pagina}/${link1}`} className='pag-li'>{link1}</Link>
        </li>
        <li>
          <Link to={`/${pagina}/${link2}`} className='pag-li'>{link2}</Link>
        </li>
        <li>
          <Link to={`/${pagina}/${link3}`} className='pag-li'>{link3}</Link>
        </li>
        <li>
          <Link to={`/${pagina}/${link4}`} className='pag-li'>{link4}</Link>
        </li>
      </ul>
    </nav>
  );
}
