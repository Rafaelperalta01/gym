import { useParams } from 'react-router-dom';
import Header from '../Components/header';
import '../styles/comprar.css';
import productos from '../Celulares.json'



export default function Comprar(){

    const url = window.location.pathname;

    var elemento;
    
    if ('celulares'.includes(url)) {
        elemento = 'celulares';
    } else {
        elemento = 'notebooks'
    }


    const { id } = useParams();

    return(
        <>
        <Header />
        <div className='comprar'>
            {
                productos[elemento].map(e => 
                    <p> id={e.id}
                        nombre={e.nombre}
                        oldprecio={e.oldprecio}
                        newprecio={e.newprecio}
                    </p>
                )
            }
            <h1 >asdgsdfg</h1>
            <h1>{id} </h1>
        </div>
        </>
    );
}
