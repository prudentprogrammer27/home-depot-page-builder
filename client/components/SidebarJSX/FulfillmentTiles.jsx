import { useState } from "react";
import FulfillmentTile from "./FufillmentTile.jsx";

const FulfillmentTiles = () => {
    const [currTile, setCurrTile] = useState('Pickup');

    return (
        <div className="fulfillment-tiles sb-parent">
            <div className="fulfillment-tiles fulfillment-headers">
                <div className="fulfillment-header-pickup">Pickup at N Tacoma</div>
                <div className="fulfillment-header-delivery">Delivering to 55555</div>
            </div>
            <div className="cart-info fulfillment-cards">
                <FulfillmentTile currTile={currTile} setCurrTile={setCurrTile} title={'Pickup'} sub1={'Today'} sub2={'11'} sub3={'in stock'}/>
                <FulfillmentTile currTile={currTile} setCurrTile={setCurrTile} title={'Delivery'} sub1={'Tomorrow'} sub2={'1,011'} sub3={'available'}/>
            </div>
        </div>
    )
}

export default FulfillmentTiles;