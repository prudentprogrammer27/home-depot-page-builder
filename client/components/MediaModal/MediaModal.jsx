import React, { useEffect, useState } from "react";
import "./mediaModal.css";
import axios from "axios";


const MediaModal = ({ currentProduct, toggleModal }) => {
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/img_urls/${currentProduct.id}`);
        
        if (response.data.length > 0) {
          const imagesData = response.data.map((image) => ({
            original: `https://images.thdstatic.com/productImages/${image.img_url}600.jpg`,
            thumbnail: `https://images.thdstatic.com/productImages/${image.img_url}100.jpg`,
            id: `image${image.id}`,
          }));
          setImages(imagesData);
          setMainImage(imagesData[0].original);
        }
      } catch (error) {
        console.error("Error fetching image-urls for modal", error);
      }
    };
    fetchData();
  }, [currentProduct]);

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail.original);
  };

  const showThumbnails = () => {
    return images.map((image) => (
      <button
        key={image.id}
        className="btn-thumbnail"
        onClick={() => handleThumbnailClick(image)}
      >
        <img
          src={image.thumbnail}
          className="thumbnail-image"
          alt={`Thumbnail ${image.id}`}
        />
      </button>
    ));
  };

  const handleClose = () => {
    toggleModal();
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={handleClose}>
          <div
            id="modal-content"
            className="modal-content"
            onClick={handleClick}
          >
            <div className="modal-main-image">
              <img src={mainImage} alt="Main Image" />
            </div>
            <div className="modal-item-details">
              <div id="modal-item-description">
                {currentProduct.product_name}
              </div>
              <div id="modal-item-manufacturer">
                by <b>{currentProduct.manufacturer}</b>
              </div>
              <div className="modal-thumbnails-title">Product Images</div>
              <div className="modal-thumbnail-container">
                {showThumbnails()}
              </div>
            </div>
            <button className="close-modal" onClick={handleClose}>
              <span className="close-modal-CLOSE">CLOSE</span>
              <span className="close-modal-X">X</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaModal;
