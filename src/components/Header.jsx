import sol from "/sol-de-mayo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex flex-col items-center w-full h-28 bg-transparent absolute top-1 z-10 sm:flex-row sm:justify-between px-4 sm:px-8">
            <Link to={`/`} className="flex flex-row items-center"> 
                <img src={sol} alt="Sol de Mayo" className="w-16 h-16 sm:w-24 sm:h-24" />
                <div className="ml-3 sm:ml-5 flex flex-col justify-center">
                    <h1 className="font-montserrat italic font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-bluelight mb-0">Argentina</h1>
                    <h2 className="font-montserrat italic font-black text-md sm:text-lg md:text-md lg:text-xl xl:text-2xl tracking-wide text-bluelight leading-none">Coronados de Gloria</h2>
                </div>
            </Link>
            <nav className="mt-3 sm:mt-0">
                <ul className="flex flex-row items-center gap-3 sm:gap-5 font-montserrat font-medium text-xs sm:text-sm md:text-md text-white">
                    <li><Link to={`/`}>INICIO</Link></li>
                    <li><Link to={`/destacados/buenosaires`} >DESTACADOS</Link></li>
                    <li><Link to={`/provincias/buenosaires`}>DESCUBRI ARGENTINA</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


/* flex flex-row justify-between items-center w-100 h-28 ml-10 bg-transparent absolute top-1 z-10 */