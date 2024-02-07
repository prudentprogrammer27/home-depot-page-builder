import "./mediaGalleryDesktop.css";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import axios from "axios";
import "./mediaGalleryDesktop.css";

const MediaGalleryDesktop = ({ currentProduct, toggleModal }) => {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/img_urls/${currentProduct.id}`);
        // console.log(response.data);
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

  const handleClick = () => {
    toggleModal();
  };

  const images = currentImages.map((image) => prepImgUrl(image.img_url));
  // console.log("Images", images);
  return (
    <>
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        loading="lazy"
        thumbnailLoading="lazy"
        showFullscreenButton={false}
        showPlayButton={false}
        onClick={handleClick}
      />
    </>
  );
};

export default MediaGalleryDesktop;
