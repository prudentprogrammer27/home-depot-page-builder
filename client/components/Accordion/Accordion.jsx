import { useState } from 'react';
import ProductDetailsContent from './ProductDetailsContent.jsx';
import SpecificationsContent from './SpecificationsContent.jsx';
import QandAContent from './QandAContent.jsx';
import CustomerReviewsContent from './CustomerReviewsContent.jsx';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive(!isActive);
  };

  const renderContent = () => {
    switch (title) {
      case 'Product Details':
        return <ProductDetailsContent />;
      case 'Specifications':
        return <SpecificationsContent />;
      case 'Questions & Answers':
        return <QandAContent />;
      case 'Customer Reviews':
        return <CustomerReviewsContent />;
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

export default function Accordion() {
  return (
    <div className="grid-container">
      <Panel title="Product Details"  />
      <Panel title="Specifications" />
      <Panel title="Questions & Answers" />
      <Panel title="Customer Reviews" />
    </div>
  );
}