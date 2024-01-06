import Aos from "aos";
// import Circle from "../Components/circle";
import Navbar from "../Components/navbar";
import ver from '../images/play.png'
import { useEffect } from "react";

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 1500, delay: '200' })
    }, [])

    return (
        <div className="h-screen bg-white overflow-hidden dark:bg-gradient-to-r from-gray-600 to-gray-900">
            <div className="px-14 py-4 h-screen relative z-10">
                <div className=" filter drop-shadow-lg blur-3xl ">
                    {/* <Circle color={'gray-200'} position={{ top: '0%', left: '80%' }} transformx={'-80%'} transformy={'-100%'}/>
                    <Circle color={'orange-500'} position={{ top: '50%', left: '0%' }} transformx={'-100%'} transformy={'180%'} />
                    <Circle color={'gray-200'} position={{ top: '20%', left: '0%' }} transformx={'-100%'} transformy={'10%'} /> */}
                </div>
                <Navbar />
                <div className="flex relative  h-full justify-between px-10 pt-12 gap-5">
                    <div data-aos="fade-right" className="w-1/2 flex flex-col pt-7 pl-10">
                        <h1 className="text-7xl break-words font-bold text-black z-10 font-pt-sans dark:text-white">Get healthy <span className="text-orange-500">body</span> with the <span className="text-orange-500">perfect</span> exercises</h1>
                        <p className="pt-8 text-base text-gray-600 z-10 font-montserrat dark:text-gray-300">Lorem ipsum dolor siero neque cum cumq vitae sint, harum laboriosam aliquid nostrum incidunt recusandae repellendus.</p>
                        <div className="flex gap-10 pt-8 z-10">
                            <button className="font-open-sans bg-orange-500 hover:bg-orange-700 text-white py-2 px-8 rounded transition-colors duration-300 z-10">
                                Get started
                            </button>
                            <button className="font-open-sans text-black bg-gray-200 hover:bg-orange-200 py-2 px-8 rounded transition-colors duration-300 z-10 flex gap-3">
                                <img className="h-8" src={ver} alt="" />
                                <p className="pt-1">Watch video</p>
                            </button>
                        </div>
                        <div className="pt-10 z-10">
                            <ul className="flex gap-10 text-black dark:text-white">
                                <li className="text-xs "><b className="text-3xl">105+</b> <br />Experts trainers</li>
                                <li className="text-xs "><b className="text-3xl">970+</b> <br />Member joiner</li>
                                <li className="text-xs "><b className="text-3xl">135+</b> <br />Fitness Programs</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" w-full mr-[-40vw] h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-900">
                        <img data-aos="fade-left" className="absolute bottom-0 right-0 w-auto h-full mb-[-50px] " src={'https://ragnar-gym.netlify.app/img/choose-img.png'} alt="Mina" />
                        <div data-aos="fade-left" className="h-24 w-40 z-50 mt-96 relative ml-20 backdrop-blur-sm bg-white bg-opacity-50 rounded-xl text-center" >
                            <ul className="flex justify-center pt-3">
                                <li className="h-6 w-6 bg-white rounded-full"></li>
                                <li className="h-6 w-6 bg-white rounded-full"></li>
                                <li className="h-6 w-6 bg-white rounded-full"></li>
                                <li className="h-6 w-6 bg-white rounded-full"></li>
                            </ul>
                            <p><b>+200k</b></p>
                            <p className="text-sm">Happy coustomers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;

