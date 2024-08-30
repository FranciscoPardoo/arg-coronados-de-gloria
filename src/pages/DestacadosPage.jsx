import { useParams } from "react-router-dom"
import { DestinosDestacados } from "../data/dataDestacados" 
import NotFound from "../components/NotFound"

function DestacadosPage() {
    const {id} = useParams()

    const destino = DestinosDestacados.find(({ idd }) => id === idd);

    return destino ? (
        <div key={destino.idd} style={{ backgroundImage: `url(${destino.imagen})` }}  className="h-screen bg-cover bg-fixed">
            <h1 className="flex  pt-80 pr-96 justify-center items-center h-120 text-slate-50 font-montserrat italic font-black text-5xl">{destino.titulo}</h1>
            <p className="flex justify-center mx-52 items-center text-slate-50 font-montserrat italic font-black text-xl">{destino.info}</p>
        </div>
    ) : (
        <div><NotFound/></div>
    );
}

export default DestacadosPage