/* eslint-disable react/prop-types */

function CardMap({imagen, titulo, info}) {
    return (
        <div className="bg-slate-100 rounded-xl">
            <img src={imagen[0]} alt="Destino destacado" className="rounded-t-xl" />
            <h3 className="font-montserrat font-semibold text-black text-2xl flex justify-center mt-5">{titulo}</h3>
            <p className="font-montserrat font-medium text-black text-base flex justify-center m-5 pb-8">{info[0].substring(0,150)}...Ver mas</p>
        </div>
    )
}

export default CardMap