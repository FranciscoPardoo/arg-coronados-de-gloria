import Provincias from "../components/Provincias"
import Carousel from './Carousel'



function DescubriArg() {    
    return (
        <div className="p-5 h-max bg-[url('/src/assets/obelisco.jpg')] bg-right-top">
            <h3 className="font-montserrat font-medium text-3xl italic text-slate-100 ml-20 drop-shadow">Descubri Argentina</h3>
            <div className="grid grid-cols-2 items-center justify-center">
                <Provincias/>
                <Carousel/>
            </div>
        </div>
    )
}

export default DescubriArg