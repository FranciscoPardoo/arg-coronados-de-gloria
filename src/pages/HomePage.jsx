import DescubriArg from "../components/DescubriArg"
import Destacados from "../components/Destacados"

function Home() {
    return (
        <>
        <div id="inicio" className="bg-[url('/public/portada-inicio.jpg')] h-screen bg-cover bg-fixed">
            <h1 className="flex  pt-80 pr-96 justify-center items-center h-120 text-slate-50 font-montserrat italic font-black text-5xl drop-shadow-xl">Argentina Donde el Tango<br/>Encuentra la Naturaleza </h1>
        </div>
        <Destacados/>
        <DescubriArg/>
        </>
    )
}

export default Home