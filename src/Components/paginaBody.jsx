import '../styles/paginaBody.css';
import Caja from './Caja';
import data from '../Celulares.json';


export default function PaginaBody(){
    return(
        <div className='PaginaBody'>
            <div className="pagina-body">
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300' 
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
                <Caja oldprecio='300'
                newprecio='180'
                />
            </div>
        </div>
    );
}

