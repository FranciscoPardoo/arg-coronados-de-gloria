import sol from "/sol-de-mayo.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex flex-row justify-between items-center w-100 h-28 ml-10 bg-transparent absolute top-1 z-10">
            <Link to={`/`} className="flex flex-row"> 
                <img src={sol} alt="Sol de Mayo" className="w-24 h-24" />
                <div className="ml-5 flex flex-col justify-center">
                    <h1 className="font-montserrat italic font-black text-4xl tracking-widest text-bluelight mb-0">Argentina</h1>
                    <h2 className="font-montserrat italic font-black text-xl tracking-wide text-bluelight leading-none">Coronados de Gloria</h2>
                </div>
            </Link>
            <nav>
                <ul className="flex flex-row gap-5 font-montserrat font-medium text-lg text-white">
                    <li><Link to={`/`}>INICIO</Link></li>
                    <li><Link to={`/destacados/buenosaires`} >DESTACADOS</Link></li>
                    <li><Link to={`/provincias/buenosaires`}>DESCUBRI ARGENTINA</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header