import React from "react";
import guiones from '../images/guionesnar.png'
import Puntitos from "./puntitos";

const About1 = () => {
    return (
        <>
            <section className="overflow-hidden h-full bg-white dark:bg-gradient-to-r from-gray-500 to-gray-700 relative">
                <img className='w-8 h-80 absolute top-20 left-0 dark:hidden' src={guiones} alt="Guiones" />
                <img className='w-8 h-80 absolute bottom-20 right-0 dark:hidden' src={guiones} alt="Guiones" />
                <div className="container mx-auto py-10">

                    <div className="flex flex-wrap items-center justify-between px-24">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2 flex justify-center items-center flex-col gap-10">
                                    <div className="h-80 w-60">
                                        <img
                                            data-aos="fade-right"
                                            data-aos-duration="1500"
                                            src="https://www.hammer.ar/image/doschicas.jpeg"
                                            alt="img"
                                            className="h-full w-full object-cover rounded-2xl "
                                        />
                                    </div>
                                    <div className="h-80 w-60">
                                        <img
                                            data-aos="fade-right"
                                            data-aos-duration="2100"
                                            src="https://www.hammer.ar/image/senoras.jpeg"
                                            alt="img"
                                            className="w-full h-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full  sm:px-4 xl:w-auto">
                                    <div className="relative h-96 z-10 my-4 ">
                                        <img
                                            data-aos="fade-right"
                                            data-aos-duration="1800"
                                            src="https://www.hammer.ar/image/slider4.jpg"
                                            alt="img"
                                            className="w-full rounded-2xl h-full w-auto "
                                        />
                                        <Puntitos />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary dark:text-orange-500">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-orange-500 sm:text-[40px]/[48px] dark:text-white">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-gray-200">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-gray-200">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a
                                    href="https://facebook.com"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-orange-500 hover:bg-opacity-80"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About1;