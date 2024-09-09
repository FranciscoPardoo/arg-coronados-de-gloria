import React from "react";
import Card from "../components/Card";
import { DestinosDestacados } from "../data/dataDestacados";
import { Link } from "react-router-dom";

function Destacados() {
    return (
        <div id="destacado" className="flex flex-col h-full">
            <h3 className="font-montserrat font-medium text-2xl md:text-3xl italic text-bluelight ml-4 md:ml-10 my-5 drop-shadow">
                Destinos Destacados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center px-4 md:px-16">
                {React.Children.toArray(
                    DestinosDestacados.map(({ imagen, titulo, idd }) => (
                        <Link to={`/destacados/${idd}`}>
                            <Card
                                title={titulo}
                                img={imagen}
                            />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Destacados;
