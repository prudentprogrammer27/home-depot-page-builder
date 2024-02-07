import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetailsContent.css";

const ProductDetailsContent = ({ currentProduct }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`/api/productdetails_images/${currentProduct.id}`);
        setItems(response.data);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    }

    fetchItems();
  }, [currentProduct])

  return (
    <div className="accordion_expanded">
      <div className="product-details-overview">
      <div className="grid-column-recursive-content">
          {items.map((item) => (
            <div key={item.id} className="content-item">
              <div className="content-image">
                <img
                  data-revjet-if={`dataFeedItem.pod_${item.id}_background`}
                  data-revjet-src={`{_dataFeedItem.pod_${item.id}_background}`}
                  data-revjet-alt={`{_dataFeedItem.pod_${item.id}_alt_text}`}
                  data-revjet-title={`{_dataFeedItem.pod_${item.id}_alt_text}`}
                  className="stretchy stretchy"
                  loading="lazy"
                  src={item.imagesrc}
                  alt={item.alttext}
                  title={item.alttext}
                />
              </div>
              <h3 className="img_title">
                <span>{item.title}</span>
              </h3>
              <p className="img_description">
                <span>{item.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsContent;