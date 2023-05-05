import Header from "../Components/header";
import PaginaNav from "../Components/paginaNav";
import PaginaBody from "../Components/paginaBody";

export default function Notebooks(){
    return(
        <>
            <Header />
            <PaginaNav link1={'Lenovo'}
            link2={'MacBooks'}
            link3={'HP'}
            link4={'Samsung'}
            />
            <PaginaBody />
        </>
    );
}
