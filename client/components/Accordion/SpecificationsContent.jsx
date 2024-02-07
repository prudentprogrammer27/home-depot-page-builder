import React, { useState, useEffect } from "react";
import axios from "axios";

const SpecificationsContent = ({ currentProduct }) => {
  const [specifications, setSpecifications] = useState([]);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get(`/api/specifications_dimensions/${currentProduct.id}`);
        setSpecifications(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchSpecifications();
  }, [currentProduct]);

  return (
    <div className="accordion_expanded">
      <div className="dimensions">
        <h4 className="specTitle">Dimensions</h4>
        <div className="spec_table_container">
          <table className="spec_table">
            <tbody>
              {specifications.map((spec, index) => (
                <React.Fragment key={index}>
                  <tr className="spec_row">
                    <th className="spec_table_label">Product Depth (in.)</th>
                    <td className="spec_cell">{spec.depth} {spec.depth_unit_of_measure}</td>
                    <th className="spec_table_label">Product Width (in.)</th>
                    <td className="spec_cell">{spec.width} {spec.width_unit_of_measure}</td>
                  </tr>
                  <tr className="spec_row">
                    <th className="spec_table_label">Product Height (in.)</th>
                    <td className="spec_cell">{spec.height} {spec.height_unit_of_measure}</td>
                    <th className="spec_table_label"></th>
                    <td className="spec_cell"></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsContent;

