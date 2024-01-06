

const Marcas = () => {



    return (
        <div className="h-48 w-full bg-gray-200 flex justify-center items-center dark:bg-gray-400 overflow-hidden">
            <ul className=" flex gap-12 px-6">
                <li data-aos-duration='500' data-aos="zoom-in-up" title="sin página">
                    <img className="h-16" src="https://www.hammer.ar/image/comercio1.png" alt="" />
                </li>
                <li data-aos-duration='600' data-aos="zoom-in-up">
                    <a className="cursor-pointer" href="https://gerf.com.ar" target="_blank" rel="noreferrer">
                        <img className="h-16" src="https://www.hammer.ar/image/comercio2.png" alt="" />
                    </a>
                </li>
                <li data-aos-duration='750' data-aos="zoom-in-up">
                    <a className="cursor-pointer" href="https://confiterialaestrella.com" target="_blank" rel="noreferrer">
                        <img className="h-16" src="https://www.hammer.ar/image/comercio3.png" alt="" />
                    </a>
                </li>
                <li data-aos-duration='900' data-aos="zoom-in-up" title="sin página">
                        <img className="h-16" src="https://www.hammer.ar/image/comercio4.png" alt="" />
                </li>
                <li data-aos-duration='1050' data-aos="zoom-in-up" title="sin página">
                        <img className="h-16" src="https://www.hammer.ar/image/comercio5.png" alt="" />
                </li>
                <li data-aos-duration='1200' data-aos="zoom-in-up" title="sin página">
                        <img className="h-16 nm" src="https://www.hammer.ar/image/comercio6.png" alt="" />
                </li>
                <li data-aos-duration='1350' data-aos="zoom-in-up" title="sin página">
                        <img className="h-16" src="https://www.hammer.ar/image/comercio7.png" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Marcas;