import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

const CustomerImageCarousel = ({ currentProduct }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch image URLs from your API (replace with your actual API endpoint)
    axios.get(`/api/review_images/${currentProduct.id}`)
      .then(response => {
        setImageUrls(response.data.map(image => image.img_url));
      })
      .catch(error => {
        console.error('Error fetching image URLs', error);
      });
  }, [currentProduct]);

  return (
      <div className="customer-images-wrapper">
        <div className="cust-img-title">
          <span>Customer Images</span>
        </div>
        <div className="cust-img-carousel-container">
            <Carousel imageUrls={imageUrls} />
        </div>
      </div>
  );
};

export default CustomerImageCarousel;
