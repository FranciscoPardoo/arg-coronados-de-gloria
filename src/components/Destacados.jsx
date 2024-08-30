import React from "react";
import Card from "../components/Card"
import { DestinosDestacados } from "../data/dataDestacados"
import { Link } from "react-router-dom";

function Destacados() {
    return (
        <div id="destacado" className="flex flex-col h-full">
            <h3 className="font-montserrat font-medium text-3xl italic text-bluelight ml-20 my-5 drop-shadow">Destinos Destacados</h3>
                <div className="grid grid-cols-4 justify-items-center mx-40">
                    {React.Children.toArray(
                    DestinosDestacados.map(({ imagen, titulo, idd }) => (
                        <Link to={`/destacados/${idd}`} >
                            <Card
                                title={titulo}
                                img={imagen}
                            />
                        </Link>
                    ))
                    )}
                </div>
        </div>
    )
}

export default Destacados