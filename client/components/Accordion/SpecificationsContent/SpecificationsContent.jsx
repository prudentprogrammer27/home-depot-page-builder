import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SpecContent.css";


const SpecificationsContent = ({ currentProduct }) => {
  const [specificationsDim, setSpecificationsDim] = useState([]);
  const [specificationsDetail, setSpecificationDetail] = useState([]);
  const [warranty, setWarranty] = useState([]);
  
  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response1 = await axios.get(`/api/specifications_dimensions/${currentProduct.id}`);
        const response2 = await axios.get(`/api/specifications_details/${currentProduct.id}`);
        const response3 = await axios.get(`/api/warranty_certifications/${currentProduct.id}`);
        
        setSpecificationsDim(response1.data);
        setSpecificationDetail(response2.data);
        setWarranty(response3.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    
    fetchSpecifications();
  }, [currentProduct]);
  
  const dimensionRows = [
    { label1: "Product Depth (in.)", field1: "depth", unit1: "in.", label2: "Product Height (in.)", field2: "height", unit2: "in." },
    { label1: "Product Width (in.)", field1: "width", unit1: "in.", label2: "", field2: "", unit2: "" }, 
  ];
  
  const detailRows = [
    { label1: "Battery Amp Hours", field1: "battery_amp_hours", unit1: "Ah", label2: "Battery Power Type", field2: "battery_motor_type", unit2: "" },
    { label1: "Blows per Minute(BPM)", field1: "blows_per_minute", unit1: "", label2: "Charger Included", field2: "other_included", unit2: "" },
    { label1: "Color Family", field1: "color_family", unit1: "", label2: "Condition", field2: "condition", unit2: "" },
    { label1: "Cordless Tool Type", field1: "cordless_tool_type", unit1: "", label2: "Cordless/Corded", field2: "is_cordless", unit2: "" },
    { label1: "Drill/Driver Type", field1: "drill_driver_type", unit1: "", label2: "Drive Size", field2: "drive_size", unit2: "" },
    { label1: "Included", field1: "included", unit1: "", label2: "Maximum Speed (RPM)", field2: "max_speed_rpm", unit2: "" },
    { label1: "Motor Type", field1: "motor_type", unit1: "", label2: "Number of Total Batteries Included", field2: "num_batteries_included", unit2: "" },
    { label1: "Power Tool Features", field1: "power_tool_features", unit1: "", label2: "Product Weight (lb.)", field2: "product_weight", unit2: "" },
    { label1: "Returnable", field1: "returnable", unit1: "", label2: "Tools Product Type", field2: "Tools_Product_Type", unit2: "" },
    { label1: "Torque (In-Lbs)", field1: "torque", unit1: "", label2: "Voltage (V)", field2: "voltage", unit2: "" },
  ];
  
  const warrantyRows = [
    { label1: "Certification and Listings", field1: "certifications_listings", unit1: "", label2: "Manufacturer Warranty", field2: "manufacturer_warranty", unit2: "" },
  ];
  
  return (
    <div className="accordion_expanded">
      <div className="dimensions">
        <SpecificationTable title="Dimensions" data={specificationsDim} rows={dimensionRows} />
        <SpecificationTable title="Details" data={specificationsDetail} rows={detailRows} />
        <SpecificationTable title="Warranty / Certifications" data={warranty} rows={warrantyRows} />
      </div>
    </div>
  );
};

const SpecificationTable = ({ title, data, rows }) => (
  <>
    <h4 className="specTitle">{title}</h4>
    <div className="spec_table_container">
      <table className="spec_table">
        <tbody>
          {data.map((spec, index) => (
            <React.Fragment key={index}>
              {rows.map((row, rowIndex) => (
                <tr className="spec_row" key={rowIndex}>
                  <th className="spec_table_label">{row.label1}</th>
                  <td className="spec_cell">{spec[row.field1]} {row.unit1}</td>
                  <th className="spec_table_label">{row.label2}</th>
                  <td className="spec_cell">{spec[row.field2]} {row.unit2}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default SpecificationsContent;
