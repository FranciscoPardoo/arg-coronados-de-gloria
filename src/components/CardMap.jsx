/* eslint-disable react/prop-types */

function CardMap({ imagen, titulo, info }) {
    return (
        <div className="bg-slate-100 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <img src={imagen[0]} alt="Destino destacado" className="rounded-t-xl w-full h-48 object-cover" />
            <h3 className="font-montserrat font-semibold text-black text-xl sm:text-2xl flex justify-center mt-3 sm:mt-5 text-center px-4">
                {titulo}
            </h3>
            <p className="font-montserrat font-medium text-black text-sm sm:text-base flex justify-center m-4 sm:m-5 text-center px-4">
                {info[0].substring(0, 150)}... <span className="text-blue-500 cursor-pointer">Ver más</span>
            </p>
        </div>
    );
}

export default CardMap;
