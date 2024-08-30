import { useParams } from "react-router-dom"
import Slider from "react-slick";
import { Provincia } from "../data/dataProvincias";
import './carouselVertical.css'

function VerticalSwipeToSlide() {
const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
    console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
    console.log("after change", currentSlide);
    }
};

const {id} = useParams()
const destino = Provincia.find(({ idd }) => id === idd);

return (
    <div className="slider-container">
        <Slider {...settings}>
        {destino.imagen.map((imagen, index)=>(
            <img key={index} src={imagen} className="m-3 rounded-sm"/>
                ))
            }
        </Slider>
    </div>
    );
}

export default VerticalSwipeToSlide;