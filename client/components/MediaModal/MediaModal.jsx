import React, { useEffect, useState } from "react";
import "./mediaModal.css";
import ImageGallery from "react-image-gallery";
import axios from "axios";

const MediaModal = ({ currentProduct, toggleModal, modal }) => {
  // TODO refactor ========== Re-Use Code from media Gallery
  // const [currentImages, setCurrentImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [originals, setOriginals] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  console.log(currentProduct);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/img_urls/${currentProduct.id}`);
        console.log("Image-url table", response.data);
        if (response.data.length > 0) {
          const originalImages = response.data.map((image) => {
            return prepImgUrl(image.img_url, "original", image.id);
          });
          const thumbnailImages = response.data.map((image) => {
            return prepImgUrl(image.img_url, "thumbnail", image.id);
          });
          const firstImageURL = originalImages[0].original;
          setOriginals(originalImages);
          setThumbnails(thumbnailImages);
          console.log("First Imgage URL", firstImageURL);
          setMainImage(firstImageURL);
        }
      } catch (error) {
        console.error("Error fetching image-urls for modal", error);
      }
    };
    fetchData();
  }, [currentProduct]); // empty dependency array so only runs when component mounts

  const prepImgUrl = (img_url, size, id) => {
    const baseURL = "https://images.thdstatic.com/productImages/";
    return {
      original:
        size === "original"
          ? `${baseURL}${img_url}600.jpg`
          : `${baseURL}${img_url}145.jpg`,
      thumbnail:
        size === "thumbnail"
          ? `${baseURL}${img_url}100.jpg`
          : `${baseURL}${img_url}600.jpg`,
      id: size === "orginal" ? `og${id}` : `thumb${id}`,
    };
  };

  const handleClick = () => {
    toggleModal();
  };

  const showThumbnails = () => {
    return thumbnails.map((thumbnail) => (
      <button key={thumbnail.id} className="btn-thumbnail">
        <img src={thumbnail.thumbnail} className="thumbnail-image" />
      </button>
    ));
  };

  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={handleClick}>
          <div id="modal-content" className="modal-content">
            <div className="modal-main-image">
              <img src={mainImage} />
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
            <button className="close-modal" onClick={handleClick}>
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
