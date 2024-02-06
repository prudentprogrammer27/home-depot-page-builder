import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarJSX/Sidebar.jsx";
import Header from './Header/Header.jsx'

const App = () => {

  return (
    <main>
      <Header/>
      <div className="item-wrapper">
        <div className="item-wrapper bounding-box">
          <div className="picture-and-sidebar">
            <div className="img-gallery"></div>
            <Sidebar/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
