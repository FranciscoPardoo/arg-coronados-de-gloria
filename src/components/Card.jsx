/* eslint-disable react/prop-types */



function Card({img, title}) {
    return    (
            <div className="mb-5 h-min overflow-hidden rounded-md">
                <div className="h-80 w-64 rounded-t-xl bg-cover hover:scale-125 transition-all duration-500 cursor-pointer bg-center" style={{ backgroundImage: `url(${img})` }}>
                    <h3 className="font-montserrat font-semibold text-white drop-shadow-xl text-xl h-80 pb-10 flex justify-center items-end">{title}</h3>
                </div>
            </div>
    )
}

export default Card