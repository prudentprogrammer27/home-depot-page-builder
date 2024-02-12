import Slider from 'react-slick';
import './CustomerReviewsContent.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = ({ imageUrls }) => {
    console.log('Carousel imageUrls:', imageUrls);
    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 4,
  };

  return (
    // <div className="carousel-container"> {/* Add a container div */}
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
            <div key={index} className="carousel-slide">
              <img src={imageUrl} alt={`Customer Image ${index + 1}`} className="carousel-image" />
            </div>
        ))}
      </Slider>
    // </div>
  );
};

export default Carousel;