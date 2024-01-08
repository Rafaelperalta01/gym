import About1 from "../Components/about";
import Footer from "../Components/footer";
import Marcas from "../Components/marcas";
import Servicios from "../Components/servicios";
import Testimonios from "../Components/testimonios";
import Main from "./main1";


export default function Pagina() {
    return (
        <>
            <Main />
            <Marcas />
            <Servicios />
            <About1 />
            <Testimonios />
            <Footer />
        </>

    )
}