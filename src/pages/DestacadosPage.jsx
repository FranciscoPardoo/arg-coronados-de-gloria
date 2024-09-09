import { useParams } from "react-router-dom";
import { DestinosDestacados } from "../data/dataDestacados"; 
import NotFound from "../components/NotFound";

function DestacadosPage() {
    const { id } = useParams();

    const destino = DestinosDestacados.find(({ idd }) => id === idd);

    return destino ? (
        <div 
            key={destino.idd} 
            style={{ backgroundImage: `url(${destino.imagen})` }}  
            className="h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16"
        >
            <h1 className="text-center text-slate-50 font-montserrat italic font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                {destino.titulo}
            </h1>
            <p className="text-center text-slate-50 font-montserrat italic font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto max-w-3xl bg-black/30 rounded-lg">
                {destino.info}
            </p>
        </div>
    ) : (
        <div><NotFound /></div>
    );
}

export default DestacadosPage;
