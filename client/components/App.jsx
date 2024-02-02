import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarJSX/Sidebar.jsx";

const App = () => {

  return (
    <main>
      <header><span>HEADER</span></header>
      <div className="item-wrapper">
        <div className="item-wrapper bounding-box">
          <div className="link-path">Link path // store sku</div>
          <div className="picture-and-sidebar">
            <div className="img-gallery"><span>GALLERY</span></div>
            <Sidebar/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
