import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./commonSlider.css";

function CommonSlider() {
    // Variable which is used to maintain images to use slider
    const images = [
        {
            id: 1,
            src: require('../../assets/slider-1.jpeg'),
            alt: "Image 1",
        },
        {
            id: 2,
            src: require('../../assets/slider-2.jpeg'),
            alt: "Image 2 ",
        },
        {
            id: 3,
            src: require('../../assets/slider-3.jpeg'),
            alt: "Image 3",
        },];

    return (
        <Slider {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            autoplay: true,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            nextArrow: (
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
            ),
            prevArrow: (
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
            ),



        }}>
            {images.map((item) => (
                <div key={item.id}>
                    <img style={{ margin: "auto", borderRadius: 5 }} src={item.src} alt={item.alt} height={500} width={500} />
                </div>
            ))}
        </Slider >
    );
}

export default CommonSlider;