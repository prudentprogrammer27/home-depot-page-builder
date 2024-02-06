import "./header.css"

const Header = () => {
  return (
    <>
      <header>
        <div id="tophat">
          <span id="tophat-span">#1 Home Improvement Retailer</span>
        </div>
        <div id="header-root">
          <div className="header-content">
            <div className="side-by-side" id="home-depot-logo">
              <img src="./header-images/HDLogo.png" alt="Home Depot Logo" />
            </div>
            <div className="side-by-side" id="store-loc-time-zip">
              <div className="location-divs" id="storeLogo">
                <img id="storePic" src="./header-images/store.png" alt="Store Icon" />
              </div>
              <div className="location-divs" id="storeLocation">
                SW Color...
              </div>
              <div className="location-divs" id="storeTime">
                9PM
              </div>
              <div className="location-divs" id="truck">
                <img id="truckPic" src="./header-images/truck.png" alt="Truck Icon" />
              </div>
              <div className="location-divs" id="storeZip">
                86753
              </div>
            </div>
            <div className="side-by-side" id="searchbar">
              <input
                id="searchStuff"
                type="text"
                id="searchInput"
                placeholder="What can we help you find today?"
              />
              <button onClick={() => performSearch()}>
                <img src="./header-images/search.png" alt="Search Icon" />
              </button>
            </div>
            <div className="side-by-side" id="navIcons">
              <img src="./header-images/bucket.png" alt="Bucket Icon" />
              <img src="./header-images/services.png" alt="Services Icon" />
              <img src="./header-images/DIY.png" alt="DIY Icon" />
              <img src="./header-images/me.png" alt="Me Icon" />
            </div>
            <div className="side-by-side" id="cartIcon">
              <img src="./header-images/cart.png" alt="Cart Logo" />
              <div>3</div>
            </div>
          </div>
        </div>
        <div id="navigationBar">
          <div id="navBarContents">
            <div id="navigationPath">... / Tools / Power Tools / Drills / Impact Drivers </div>
            <div id="navPlaceholder"></div>
            <div id="adminInfo">
              Internet # 314109290
              Model # PBLCK01K
              Store SKU # 1005767796
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;