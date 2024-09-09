import { useParams } from "react-router-dom";
import { Provincia } from "../data/dataProvincias";
import NotFound from "../components/NotFound";
import Parrafo from "../components/Parrafo";
import VerticalSwipeToSlide from "../components/CarouselVertical";

function DescubriArgPage() {
    const { id } = useParams();

    const destino = Provincia.find(({ idd }) => id === idd);

    return destino ? (
        <div>
            <div
                key={destino.idd}
                style={{ backgroundImage: `url(${destino.imagen[0]})` }}
                className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
            >
                <h1 className="text-slate-50 font-montserrat italic font-black text-4xl md:text-5xl lg:text-6xl text-center">
                    {destino.titulo}
                </h1>
            </div>
            <div className="bg-slate-50 py-8 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center space-y-4">
                    {destino.info.map((parrafo, index) => (
                        <Parrafo key={index} texto={parrafo} />
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <VerticalSwipeToSlide />
                </div>
            </div>
        </div>
    ) : (
        <div><NotFound /></div>
    );
}

export default DescubriArgPage;
