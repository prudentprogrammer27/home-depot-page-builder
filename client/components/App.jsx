import React, { useEffect, useState } from "react";
import Accordion from "./Accordion/Accordion.jsx";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <div className="accordionGrid">
        <Accordion />
      </div>
    </main>
  );
};

export default App;
