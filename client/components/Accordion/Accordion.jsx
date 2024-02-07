import { useState } from 'react';
import ProductDetailsContent from './ProductDetailsContent.jsx';
import SpecificationsContent from './SpecificationsContent/SpecificationsContent.jsx';
import QandAContent from './QandAContent.jsx';
import CustomerReviewsContent from './CustomerReviewsContent.jsx';
import './accordion.css';


export default function Accordion( {currentProduct} ) {
  return (
    <div className="accordionGrid">
      <div className="grid-container">
        <Panel currentProduct={currentProduct} title="Product Details"  />
        <Panel currentProduct={currentProduct} title="Specifications" />
        <Panel currentProduct={currentProduct} title="Questions & Answers" />
        <Panel currentProduct={currentProduct} title="Customer Reviews" />
      </div>
    </div>
  );
}

function Panel({ title, children, currentProduct }) {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive(!isActive);
  };

  const renderContent = () => {
    switch (title) {
      case 'Product Details':
        return <ProductDetailsContent currentProduct={currentProduct}/>;
      case 'Specifications':
        return <SpecificationsContent currentProduct={currentProduct}/>;
      case 'Questions & Answers':
        return <QandAContent currentProduct={currentProduct}/>;
      case 'Customer Reviews':
        return <CustomerReviewsContent currentProduct={currentProduct}/>;
      default:
        return null;
    }
  };

  return (
    <div className="zone-card">
      <section className={`panel ${isActive ? 'active' : ''}`} onClick={togglePanel} role="button" tabIndex="0">
        <div className="panel-header">
          <h3>{title}</h3>
          <img
            src="https://assets.thdstatic.com/images/v1/caret-brand-small.svg"
            alt="caret"
            className={`toggleImg ${isActive ? 'rotate' : ''}`}
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
