import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
            <p>Esta pagina no existe querido </p>
            <Link to={'/'}>Vuelva a la pagina</Link>
        </>
        
    );
}