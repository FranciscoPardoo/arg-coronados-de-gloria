import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMap from './CardMap';
import { Provincia } from '../data/dataProvincias';
import { Link } from 'react-router-dom';
import "./carousel.css";

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // Tablets y laptops
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768, // Tablets pequeñas y dispositivos móviles grandes
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480, // Móviles pequeños
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

function CarouselComponent() {
    return (
        <div className="carousel-container max-w-full px-4 sm:px-8 ">
            <Slider {...settings}>
                {React.Children.toArray(
                    Provincia.map(({ imagen, titulo, idd, info }) => (
                        <Link to={`/provincias/${idd}`} >
                            <CardMap
                                imagen={imagen}
                                titulo={titulo}
                                info={info}
                            />
                        </Link>
                    ))
                )}
            </Slider>
        </div>
    );
}

export default CarouselComponent;
