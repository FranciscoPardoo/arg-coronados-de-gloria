import Provincias from "../components/Provincias";
import Carousel from './Carousel';

function DescubriArg() {
    return (
        <div className="p-5 h-max bg-[url('/src/assets/images/obelisco.jpg')] bg-cover bg-right-top">
            <h3 className="font-montserrat font-medium text-2xl sm:text-3xl italic text-slate-100 ml-4 sm:ml-10 drop-shadow">
                Descubri Argentina
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center px-4 sm:px-10">
                <Provincias />
                <Carousel />
            </div>
        </div>
    );
}

export default DescubriArg;
