import { useState } from "react";
import FulfillmentTile from "./FufillmentTile.jsx";

const FulfillmentTiles = ({localStoreInfo, onlineStoreInfo}) => {
    const [currTile, setCurrTile] = useState('Pickup');

    return (
        <div className="fulfillment-tiles sb-parent">
            <div className="fulfillment-tiles fulfillment-headers">
                <div className="fulfillment-header-pickup">Pickup at <span>{localStoreInfo.city_name}</span></div>
                <div className="fulfillment-header-delivery">Delivering to&thinsp;<span>{localStoreInfo.zipcode}</span></div>
            </div>
            <div className="cart-info fulfillment-cards">
                <FulfillmentTile currTile={currTile} setCurrTile={setCurrTile} title={'Pickup'} sub1={'Today'} sub2={localStoreInfo.inventory} sub3={'in stock'}/>
                <FulfillmentTile currTile={currTile} setCurrTile={setCurrTile} title={'Delivery'} sub1={'Tomorrow'} sub2={Number(onlineStoreInfo.inventory).toLocaleString()} sub3={'available'}/>
            </div>
        </div>
    )
}

export default FulfillmentTiles;