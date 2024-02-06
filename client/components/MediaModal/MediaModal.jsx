import React, { useEffect, useState } from "react";
import "./mediaModal.css";
import ImageGallery from "react-image-gallery";
import axios from "axios";

const MediaModal = ({ currentProduct, toggleModal, modal }) => {
  // TODO refactor ========== Re-Use Code from media Gallery
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/img_urls/${currentProduct.id}`);
        console.log("Image-url table", response.data);
        setCurrentImages(response.data);
      } catch (error) {
        console.error("Error fetching product page", error);
      }
    };
    fetchData();
  }, [currentProduct]); // empty dependency array so only runs when component mounts

  const prepImgUrl = (img_url) => {
    const baseURL = "https://images.thdstatic.com/productImages/";
    return {
      original: `${baseURL}${img_url}600.jpg`,
      thumbnail: `${baseURL}${img_url}145.jpg`,
    };
  };

  const images = currentImages.map((image) => prepImgUrl(image.img_url));
  console.log("Images", images);
  // ================= End Re-use

  // ===========  Specific to MODAL
  const handleClick = () => {
    toggleModal();
  };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={handleClick}>
          <div className="modal-content">
            <ImageGallery
              items={images}
              thumbnailPosition="right"
              loading="lazy"
              thumbnailLoading="lazy"
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
            />
            <div>
              ONE+ HP 18V Brushless Cordless 1/2 in. Drill/Driver and Impact
              Driver Kit w/(2) 2.0 Ah Batteries, Charger, and Bag
            </div>
            <button className="close-modal" onClick={handleClick}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaModal;
