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
              The RYOBI 18V ONE+ HP Brushless line of products is redefining power and performance. The RYOBI 18V ONE+ HP Brushless 2-Tool Combo Kit includes a 1/2 in. Drill/Driver, 1/4 in. Impact Driver, (2) 18V 2.0 Ah High Performance batteries, charger, and tool bag. The 1/2 in. Drill/Driver features a brushless motor, delivering up to 20% faster drilling and up to 50% more torque saving time and energy per application. Its 750 in./lbs. of torque maximizes output power when drilling through tough materials. This drill includes a two-speed gearbox (0-500 and 0-2,100 RPM) and a 24-position clutch for ultimate control, and is paired with a 1/2 in. ratcheting metal chuck for increased durability and accessory retention during heavy duty applications. The 1/4 in. Impact Driver features a brushless motor delivering up to 25% faster driving. The brushless motor delivers up to 2,200 in./lbs. of torque, providing this tool the power to drive longer fasteners through tough materials. It features one-handed bit release for quick bit changes and the on-board LED worklight ensures your workspace is always illuminated. Best of all, it is part of the RYOBI ONE+ System of over 300 Cordless Products that all work on the same battery platform. This 2-Tool Combo Kit is backed by the RYOBI 3-Year Manufacturer's Warranty and includes an 18V ONE+ HP Brushless 1/2 in. Drill/Driver, an 18V ONE+ HP Brushless 1/4 in. Impact Driver, (2) 18V 2.0 Ah High Performance Batteries, charger, bag, and operator's manuals.
            </div>
            <div className="bullet-list-wrapper">
              <div className="bullet-list">
                <ul className="list list--type-square">
                  <li className="list__item">
                    <span>Brushless Motor provides longer runtime, longer motor life, and more power</span>
                  </li>
                  <li className="list__item">
                    <span>Drill/Driver: Brushless motor provides up to 20% faster drilling and up to 750 in./lbs. of torque</span>
                  </li>
                  <li className="list__item">
                    <span>Drill/Driver: 2-speed gearbox for ultimate user control provides 0 - 500 / 0 - 2,100 RPM</span>
                  </li>
                  <li className="list__item">
                    <span>Drill/Driver: 24-position clutch allows users to adjust to desired torque setting when driving a variety of fasteners</span>
                  </li>
                  <li className="list__item">
                    <span>Drill/Driver: 1/2 in. ratcheting metal chuck for increased durability</span>
                  </li>
                  <li className="list__item">
                    <span>Drill/Driver: On-board LED worklight illuminates workspace for clear drilling visibility</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: Brushless motor delivers up to 25% faster driving and up to 2,200 in./lbs. of torque</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: Optimized impacting mechanism delivers up to 4,000 IPM</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: Variable speed trigger provides up to 2,900 RPM</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: Die cast gear case for maximum durability</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: One-handed bit release for quick bit changes</span>
                  </li>
                  <li className="list__item">
                    <span>Impact Driver: On-board LED worklight illuminates workspace for clear drilling visibility</span>
                  </li>
                  <li className="list__item">
                    <span>Part of the RYOBI 18V ONE+ System of Over 300 Cordless Products</span>
                  </li>
                  <li className="list__item">
                    <span>3-year manufacturer's warranty</span>
                  </li>
                  <li className="list__item">
                    <span>Includes: (1) PBLDD01 18V ONE+ HP Brushless 1/2 in. Drill/Driver, (1) PBLID01 18V ONE+ HP Brushless 1/4 in. Impact Driver, (2) PBP003 18V ONE+ HP 2.0 Ah High Performance batteries, charger, tool bag, and operator's manuals</span>
                  </li>
                  <li className="list__item">
                    <div>
                      <a href="https://www.homedepot.com/collection/Hardware/RYOBI-LINK-Modular-Storage/Family-319189263?omsid=317939878" target="_blank">
                        <div className="img_in_list">
                          <img src="https://inlinecontent.thdstatic.com/25T/ONE WORLD TECHNOLOGIES I/RYOBILINK.jpg" alt="Ryobi Link" />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list__item">
                    <div>
                      <a href="https://www.homedepot.com/b/RYOBI/N-5yc1vZm5d?NCNI-5&amp;searchRedirect=RYOBI&amp;semanticToken=300r10r00122002000_202110251835449027801639212_us-east1-lnkk%20300r10r00122002000%20%3E%20%20st%3A%7Bryobi%7D%3Ast%20tgr%3A%7BNo%20stage%20info%7D%20qu%3A%7Bryobi%7D%3Aqu" target="_blank">
                        <div className="img_in_list">
                          <img src="https://inlinecontent.thdstatic.com/25H/ONE WORLD TECHNOLOGIES I/2731695.jpg" alt="Ryobi Product" />
                        </div>
                      </a>
                    </div>
                  </li>
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
            {/* Additional content */}
          </div>

          <div class="col__5-12">
            <div class="grid info-guides-wrapper">
              <div id="more-info" class="info-guides">
                <h3 class="info-guides__additional-resource">Additional Resources</h3>
                <h4 class="info-guides__title">From the Manufacturer</h4>
                <ul class="document-list-wrapper list list--type-square">
                  <li class="list__item">
                    <div id="product-overview">
                      <a class="list__link" href="https://images.thdstatic.com/catalog/pdfImages/ae/ae3a45df-aa1e-4461-82c8-b611f107c6e7.pdf" rel="noopener noreferrer" target="_blank">SDS</a>
                    </div>
                  </li>
                  <li class="list__item">
                    <div id="product-overview">
                      <a class="list__link" href="https://images.thdstatic.com/catalog/pdfImages/27/27ae821e-be9c-451d-9173-7c86a2215a19.pdf" rel="noopener noreferrer" target="_blank">Warranty</a>
                    </div>
                  </li>
                  <li class="list__item">
                    <div id="product-overview">
                      <a class="list__link" href="https://images.thdstatic.com/catalog/pdfImages/ae/ae7240ad-ba4d-4970-bf24-8ad9c67f26da.pdf" rel="noopener noreferrer" target="_blank">Use and Care Manual</a>
                    </div>
                  </li>
                  <li class="list__item">
                    <div id="product-overview">
                      <a class="list__link" href="https://www.homedepot.com/c/Return_Policy" rel="noopener noreferrer" target="_blank">Return Policy</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sponsored-pla-product-overview-wrapper">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsContent;