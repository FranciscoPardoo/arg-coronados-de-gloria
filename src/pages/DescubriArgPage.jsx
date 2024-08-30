import { useParams } from "react-router-dom"
import { Provincia } from "../data/dataProvincias" 
import NotFound from "../components/NotFound"
import Parrafo from "../components/Parrafo";
import VerticalSwipeToSlide from "../components/CarouselVertical";

function DescubriArgPage() {
    const {id} = useParams()

    const destino = Provincia.find(({ idd }) => id === idd);

    return destino ? (
        <div>
            <div key={destino.idd} style={{ backgroundImage: `url(${destino.imagen[0]})` }}  className="h-screen bg-cover bg-fixed">
                <h1 className="flex  pt-80 pr-96 justify-center items-center h-120 text-slate-50 font-montserrat italic font-black text-6xl">{destino.titulo}</h1>
            </div>
            <div className="bg-slate-200 h-auto grid grid-cols-2 items-center">
                <div className="grid justify-center ml-20 mt-16">
                    {destino.info.map((parrafo, index)=>(
                    <Parrafo key={index} texto={parrafo}/>
                    ))}
                </div>
                <div className="grid justify-center">
                    <VerticalSwipeToSlide/>
                </div>
                
            </div>
        </div>
    ) : (
        <div><NotFound/></div>
    );
}

export default DescubriArgPage