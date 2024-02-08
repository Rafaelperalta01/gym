import Aos from "aos";
// import Circle from "../Components/circle";
import ver from '../images/play.png'
import { useEffect, useState } from "react";


//metodo para incrementacion de números
const NumberIncrement = ({ initialValue, finalValue }) => { 
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prevValue => {
                if (prevValue >= finalValue) {
                    clearInterval(interval);
                    return finalValue;
                }
                return prevValue + 1;
            });
        }, 10); // Velocidad de incremento

        return () => clearInterval(interval);
    }, [finalValue]);

    return value;
}

const Main = () => {

    const experts = NumberIncrement({ initialValue: 0, finalValue: 105 });
    const members = NumberIncrement({ initialValue: 0, finalValue: 670 });
    const programs = NumberIncrement({ initialValue: 0, finalValue: 135 });

    useEffect(() => {
        Aos.init({ duration: 1500, delay: '200' })
    }, [])


    return (
        <div className="z-10 pt-5 h-screen bg-white overflow-hidden dark:bg-gradient-to-r from-gray-600 to-gray-900">
            {/*Div contenedor*/}
            <div className="px-14 py-4 h-screen relative z-10">
                <div className=" filter drop-shadow-lg blur-3xl ">
                    {/* <Circle color={'gray-200'} position={{ top: '0%', left: '80%' }} transformx={'-80%'} transformy={'-100%'}/>
                    <Circle color={'orange-500'} position={{ top: '50%', left: '0%' }} transformx={'-100%'} transformy={'180%'} />
                    <Circle color={'gray-200'} position={{ top: '20%', left: '0%' }} transformx={'-100%'} transformy={'10%'} /> */}
                </div>
                <div className="flex relative  h-full justify-between px-10 pt-12 gap-5">
                    {/*Div con los textos*/}
                    <div data-aos="fade-right" className="w-1/2 flex flex-col pt-7 pl-10">
                        <h1 className="text-9xl break-words font-bold text-black z-10 font-pt-sans dark:text-white">HAMMER X</h1>
                        <p className="pt-8 text-base text-gray-600 z-10 font-montserrat dark:text-gray-300">Bienvenidos a nuestro sitio oficial. Todo lo que necesitas saber para entrenar con nosotros en un solo lugar.</p>
                        <div className="flex gap-10 pt-8 z-10">
                            <button className="font-open-sans bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
                                Comenzar
                            </button>
                            <button className="font-open-sans text-black bg-gray-200 hover:bg-orange-200 py-2 px-8 rounded transition-colors duration-300 z-10 flex gap-3">
                                <img className="h-8" src={ver} alt="" />
                                <p className="pt-1">Ver video</p>
                            </button>
                        </div>
                        <div className="pt-10 z-10">
                            <ul className="flex gap-10 text-black dark:text-white">
                                <li className="text-xs "><b className="text-3xl">{experts}+</b> <br />Experts trainers</li>
                                <li className="text-xs "><b className="text-3xl">{members}+</b> <br />Member joiner</li>
                                <li className="text-xs "><b className="text-3xl">{programs}+</b> <br />Fitness Programs</li>
                            </ul>
                        </div>
                    </div>
                    {/*Div con el circulo naranja*/}
                    <div className=" w-full mr-[-40vw] z-10 h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-900">
                        <img data-aos="fade-left" className="absolute bottom-0 right-0 w-auto h-full mb-[-50px] z-10 " src={'https://ragnar-gym.netlify.app/img/choose-img.png'} alt="Mina" />
                        {/*mini card*/}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;

