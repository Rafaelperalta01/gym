import Header from "../Components/header";
import PaginaBody from "../Components/paginaBody";
import PaginaNav from "../Components/paginaNav";


export default function Celulares(){

    const celulares = 'celulares'

    return(
        <>
        
            <Header />
            <PaginaNav 
            pagina={'celulares'}
            link1={'Iphone'}
            link2={'Motorola'}
            link3={'Samsung'}
            link4={'LG'}
            />        
            <PaginaBody  elementos={celulares}
            />
        </>
        
    );
}
