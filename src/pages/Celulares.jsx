import { Route, Routes } from "react-router-dom";
import Header from "../Components/header";
import PaginaBody from "../Components/paginaBody";
import PaginaNav from "../Components/paginaNav";
import Pagina from "../Components/pagina";


export default function Celulares(){
    return(
        <>
        
            <Header />
            <PaginaNav link1={'Iphone'}
            link2={'Motorola'}
            link3={'Samsung'}
            link4={'LG'}
            />        
            <PaginaBody />
        </>
        
    );
}
