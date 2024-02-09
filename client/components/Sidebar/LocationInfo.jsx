import { useEffect, useState } from "react";

const LocationInfo = ({localStoreInfo}) => {
    const [displayVal, setDisplayVal] = useState('flex');  

    useEffect(()=> {

      (localStoreInfo.inventory == 0) ? setDisplayVal('none') : setDisplayVal('flex');

    }, [localStoreInfo]);

    return (
      <div className="location-info sb-parent" style={{display: displayVal}}>
        <fieldset className="location-info-fieldset">
            <legend><b>{localStoreInfo.city_name} Store</b></legend>
                <section className="location-info-stock-info">
                  <span>
                    <svg className="location-info-svg"><path d="M24 4.62 8.254 20.232 0 12.118l1.577-1.604 6.67 6.558 14.17-14.05 1.585 1.597Z"></path></svg>
                  </span>
                  <span className="location-info-stock-count">{localStoreInfo.inventory} in stock</span>
                  <span>Aisle 21, Bay 001</span>
                </section>
        </fieldset>
      </div>
    )
}

export default LocationInfo;