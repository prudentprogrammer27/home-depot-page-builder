const LocationInfo =()=> {
    return (
        <fieldset className="location-info sb-parent">
            <legend><b>N Tacoma Store</b></legend>
                <section className="location-info-stock-info">
                  <span>
                    <svg className="location-info-svg"><path d="M24 4.62 8.254 20.232 0 12.118l1.577-1.604 6.67 6.558 14.17-14.05 1.585 1.597Z"></path></svg>
                  </span>
                  <span className="location-info-stock-count"> 11 in stock</span>
                  <span>Aisle 21, Bay 001</span>
                </section>
        </fieldset>
    )
}

export default LocationInfo;