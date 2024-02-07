import { useState, useEffect } from "react";

const Price =({currentProduct})=> {
    const [priceDollars, setPriceDollars] = useState('179');
    const [priceCents, setPriceCents] = useState('00');
    
    // useEffect(()=> {
    //     if(currentProduct.length !== 0) {
    //         let splitPrice = currentProduct.price.split('.');
    //         setPriceDollars(splitPrice[0]);
    //         setPriceCents(splitPrice[1]);
    //     }
    // }, [])

    return (
        <div className="price-wrapper sb-parent">
            <img className="sale-icon" src="https://assets.thdstatic.com/images/v1/Value-Pricing-Special-Buy.svg"></img>
            <div className="price">
                <span className="price-dollar-sign">$</span>
                <span className="price-dollars">{priceDollars}</span>
                <span className="price-cents">{priceCents}</span>
            </div>
            <div className="sale-info">
                <div className="sale-limit">Limit 3 per order</div>
                <div className="sale-price-original"><s>$199.00</s></div>
                <div className="sale-discount-amount">{'Save $20.00(10%)'}</div>
            </div>
        </div>
    )
}

export default Price;