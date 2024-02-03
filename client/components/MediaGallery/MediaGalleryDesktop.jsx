import "./mediaGalleryDesktop.css";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import axios from "axios";

const MediaGalleryDesktop = ({ currentProduct }) => {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/img/${currentProduct.id}`);
        console.log(response.data);
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
  return <ImageGallery items={images} />;
};

export default MediaGalleryDesktop;
