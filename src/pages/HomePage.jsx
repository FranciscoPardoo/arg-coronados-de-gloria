import DescubriArg from "../components/DescubriArg"
import Destacados from "../components/Destacados"

function Home() {
    return (
        <div className="w-full max-w-full overflow-x-hidden scroll-smooth">
            <div className="bg-[url('/public/portada-inicio.jpg')] h-screen w-full bg-cover bg-right sm:bg-fixed sm:bg-top">
                <h1 className="flex pt-56 sm:pt-48 md:pt-64 justify-center items-center text-center h-auto px-4 sm:px-10 md:px-20 text-slate-50 font-montserrat italic font-black text-3xl sm:text-4xl md:text-4xl lg:text-5xl lg:pt-80 drop-shadow-xl">
                    Argentina Donde el Tango<br />Encuentra la Naturaleza
                </h1>
            </div>
            <Destacados />
            <DescubriArg />
        </div>
    );
}

export default Home;

