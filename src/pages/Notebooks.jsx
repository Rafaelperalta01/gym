import Header from "../Components/header";
import PaginaNav from "../Components/paginaNav";
import PaginaBody from "../Components/paginaBody";

export default function Notebooks(){

    const notebooks = 'notebooks';
    return(
        <>
            <Header />
            <PaginaNav 
            pagina={'notebooks'}
            link1={'Lenovo'}
            link2={'MacBooks'}
            link3={'HP'}
            link4={'Samsung'}
            />
            <PaginaBody elementos={notebooks}/>
        </>
    );
}
