import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive(!isActive);
  };

  return (
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
      {isActive && <p>{children}</p>}
    </section>
  );
}

export default function Accordion() {
  return (
    <div className="grid-container">
      <Panel title="Product Details">
        here is where we will put product details
      </Panel>
      <Panel title="Specifications">
        Here is where we will put specifications
      </Panel>
      <Panel title="Questions & Answers">
        here is where we will put Q&A
      </Panel>
      <Panel title="Customer Reviews">
        here is where we will put customer reviews
      </Panel>
    </div>
  );
}