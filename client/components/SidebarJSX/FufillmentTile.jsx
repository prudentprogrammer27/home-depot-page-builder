import { useState } from "react";

const FulfillmentTile = ({title, sub1, sub2, sub3, currTile, setCurrTile}) => {
    let tileClass = "fulfillment-card";

    (currTile == title) ? tileClass= "fulfillment-card selected" : tileClass = "fulfillment-card";
    
    const handleSelect = (e) => {
        setCurrTile(title);
    }

    return (
        <button onClick={handleSelect} className={tileClass}>
            <div className="fulfillment-card-text">
                <div className="fulfillment-card-title">
                    <span><b>{title}</b></span>
                </div>
                <div className="fulfillment-card-subtitle">
                    <div><b>{sub1}</b></div>
                    <div className="card-subtitle-qty">
                        <span>{sub2}</span>
                        {sub3}
                    </div>
                </div>
                <div className="card-subtitle-special-msg">FREE</div>
            </div>
        </button>
    )
}

export default FulfillmentTile;