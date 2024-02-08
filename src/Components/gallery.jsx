import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <>
            <div className="bg-orange-400">
                {/* nav de la barra de navegación de galeria*/ }
                <nav class="bg-grey-light w-full rounded-md pl-20 pt-10">
                    <ol class="list-reset flex">
                        <li>
                            <Link to={'/'}>
                            <p className="text-primary transition duration-150 ease-in-out hover:text-gray-200 "
                            >Home</p>
                            </Link>
                        </li>
                        <li>
                            <span class="mx-2 text-neutral-500 dark:text-neutral-400">&gt; Galería</span>
                        </li>
                    </ol>
                </nav>
                <h1 data-aos="fade-up" className="font-roboto text-center text-4xl text-white font-semibold ">Bienvenido a la Galería Hammer</h1>
                <p data-aos="fade-up" className="text-center text-lg px-10 text-gray-900 pt-5">¡Estás a punto de sumergirte en un viaje visual que captura la esencia de Hammer Fitness! En cada imagen, encontrarás la pasión, la fuerza y la determinación que definen nuestra comunidad. Estamos comprometidos a brindarte un espacio donde puedas alcanzar tus metas fitness mientras disfrutas de un ambiente positivo y motivador.</p>
                <div data-aos="zoom-in" class="grid grid-cols-2 md:grid-cols-4 gap-4 p-20">
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="a" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="a" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="a" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="a" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="a" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Gallery;