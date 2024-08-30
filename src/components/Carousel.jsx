import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMap from './CardMap';
import { Provincia } from '../data/dataProvincias';
import { Link } from 'react-router-dom';
import "./carousel.css"

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
            breakpoint: 1020,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
};

function CarouselComponent() {
    return (
        <div className="carousel-container">
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
