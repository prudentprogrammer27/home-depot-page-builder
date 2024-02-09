import { useState } from "react";
import FulfillmentTile from "./FufillmentTile.jsx";

const FulfillmentTiles = ({localStoreInfo, onlineStoreInfo}) => {
    const [currTile, setCurrTile] = useState('Pickup');

    let localInventory = localStoreInfo.inventory;

    return (
        <div className="fulfillment-tiles sb-parent">
            <div className="fulfillment-tiles fulfillment-headers">
                <div className="fulfillment-header-pickup">Pickup at <span>{localStoreInfo.city_name}</span></div>
                <div className="fulfillment-header-delivery">Delivering to&thinsp;<span>{localStoreInfo.zipcode}</span></div>
            </div>
            <div className="cart-info fulfillment-cards">
                <FulfillmentTile localStoreInfo={localStoreInfo} currTile={currTile} setCurrTile={setCurrTile} title={(localInventory == 0) ? 'Ship To Store' : 'Pickup'} sub1={(localInventory == 0) ? 'Tomorrow' : 'Today'} sub2={(localInventory == 0) ? onlineStoreInfo.inventory : localStoreInfo.inventory} sub3={(localInventory == 0) ? 'available' : 'in stock'}/>
                <FulfillmentTile currTile={currTile} setCurrTile={setCurrTile} title={'Delivery'} sub1={'Tomorrow'} sub2={Number(onlineStoreInfo.inventory).toLocaleString()} sub3={'available'}/>
            </div>
        </div>
    )
}

export default FulfillmentTiles;