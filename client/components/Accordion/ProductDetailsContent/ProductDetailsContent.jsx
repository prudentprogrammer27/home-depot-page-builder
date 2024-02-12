import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetailsContent.css";

const ProductDetailsContent = ({ currentProduct }) => {
  const [items, setItems] = useState([]);
  const [productDescription, setProductDescription] = useState("");
  const [productList, setProductList] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [additionalResources, setAdditionalResources] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`/api/productdetails_images/${currentProduct.id}`);
        setItems(response.data);

        const productDescriptionResponse = await axios.get(`/api/products_description/${currentProduct.id}`);
        setProductDescription(productDescriptionResponse.data);

        const productListResponse = await axios.get(`/api/product_list/${currentProduct.id}`);
        setProductList(productListResponse.data);

        const imgListResponse = await axios.get(`/api/img_in_product_list/${currentProduct.id}`);
        setImgList(imgListResponse.data);

        const additionalResourcesResponse = await axios.get(`/api/additional_resources/${currentProduct.id}`);
        setAdditionalResources(additionalResourcesResponse.data);

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
        <div className="grid-content">
          <div className="left-content-wrapper">
            <div className="left-wrapper-description">
              <p>{productDescription.description}</p>
            </div>
            <div className="bullet-list-wrapper">
              <div className="bullet-list">
                <ul className="list list--type-square">
                  {productList.map((item, index) => (
                    <li key={index} className="list__item">
                      <span>{item.item_description}</span>
                    </li>
                  ))}
                  {imgList.map((img, index) => (
                    <li key={index} className="list__item">
                      <div>
                        <a href={img.img_product_list_ref} target="blank">
                          <div className="img_in_list">
                            <img src={img.img_product_list_source} alt="Product Image" />
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}

                  <li className="list__item">
                    <span>
                      <a href="https://www.homedepot.com/c/electronics_recycling_programs" style={{ color: '#F96302' }} target="_blank">Click here for more information on Electronic Recycling Programs</a>
                    </span>
                  </li>
                  <li className="list__item">
                    <a href="https://www.homedepot.com/c/Return_Policy" target="_blank" rel="noopener noreferrer" className="product-overview__return-link">Return Policy</a>
                  </li>
                  <li className="list__item">
                    <div className="prop65-wrapper">
                      <div className="prop65-wrapper--flex">
                        <div>California residents</div>
                        <div aria-expanded="false">
                          <button className="list__link bttn-outline bttn--link" id="prop65__tooltip">
                            <span className="bttn__content">see Prop 65 WARNINGS</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right-content-wrapper">
            <div className="resources-wrapper">
              <div className="resources">
                <h3>Additional Resources</h3>
                <h4>From the Manufacturer</h4>
                <ul className="list list--type-square">
                  {additionalResources.map((resource, index) => (
                    <li key={index} className="list__item">
                      <div id="product-overview">
                        <a href={resource.resource_url} rel="noopener noreferrer" target="_blank">
                          {resource.resource_type}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsContent;