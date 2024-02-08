import { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import ProductDetailsContent from "./ProductDetailsContent/ProductDetailsContent.jsx";
import SpecificationsContent from "./SpecificationsContent/SpecificationsContent.jsx";
import QandAContent from "./Q&A/QandAContent.jsx";
import CustomerReviewsContent from "./CustomerReviewsContent.jsx";
import "./accordion.css";

export default function Accordion({
  currentProduct,
  toggleReviewsActive,
  panelToShow,
}) {
  const [panels, setPanels] = useState([
    { title: "Product Details", isActive: false },
    { title: "Specifications", isActive: false },
    { title: "Questions & Answers", isActive: false },
    { title: "Customer Reviews", isActive: false },
  ]);

  const scrollToLastPanel = () => {
    // Scroll to the last panel
    scroller.scrollTo("lastPanel", {
      smooth: true,
      duration: 500,
    });
  };

  useEffect(() => {
    if (panelToShow) {
      togglePanel(panelToShow);
    }
  }, [panelToShow]);

  const togglePanel = (index) => {
    const updatedPanels = panels.map((panel, i) => {
      if (i === index) {
        return { ...panel, isActive: !panel.isActive };
      } else {
        return { ...panel, isActive: false }; // Collapse other panels
      }
    });
    setPanels(updatedPanels);

    // Scroll to the last panel when "Customer Reviews" is clicked
    if (index === panelToShow) {
      scroller.scrollTo("lastPanel", {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <div className="accordionGrid">
      <div className="grid-container">
        <Element name="lastPanel" />
        {panels.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            isActive={panel.isActive}
            currentProduct={currentProduct}
            toggleReviewsActive={toggleReviewsActive}
            togglePanel={() => togglePanel(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Panel({
  title,
  isActive,
  currentProduct,
  toggleReviewsActive,
  togglePanel,
}) {
  const renderContent = () => {
    switch (title) {
      case "Product Details":
        return <ProductDetailsContent currentProduct={currentProduct} />;
      case "Specifications":
        return <SpecificationsContent currentProduct={currentProduct} />;
      case "Questions & Answers":
        return <QandAContent currentProduct={currentProduct} />;
      case "Customer Reviews":
        return <CustomerReviewsContent currentProduct={currentProduct} />;
      default:
        return null;
    }
  };

  return (
    <div className="zone-card">
      <section
        className={`panel ${isActive ? "active" : ""}`}
        onClick={togglePanel}
        role="button"
        tabIndex="0"
      >
        <div className="panel-header">
          <h3>{title}</h3>
          <img
            src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
            alt="caret"
            className={`toggleImg ${isActive ? "rotate" : ""}`}
            height="16"
            width="16"
            loading="lazy"
          />
        </div>
        {isActive && renderContent()}
      </section>
    </div>
  );
}
