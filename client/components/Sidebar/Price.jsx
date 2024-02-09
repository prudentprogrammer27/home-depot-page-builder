import { useEffect, useState } from "react";

const Price = ({promoInfo}) => {
    const [origPriceDollars, setOrigPriceDollars] = useState('0');
    const [origPriceCents, setOrigPriceCents] = useState('00');
    const [salePriceDollars, setSalePriceDollars] = useState('0');
    const [salePriceCents, setSalePriceCents] = useState('00');

    useEffect(()=> {
        if(Object.keys(promoInfo).length == 0) return;

        let salePrice = promoInfo.price_reduced.split('.');
            setSalePriceDollars(salePrice[0]);
            setSalePriceCents(salePrice[1]);

        let origPrice = promoInfo.price_original.split('.');
            setOrigPriceDollars(origPrice[0]);
            setOrigPriceCents(origPrice[1]);

    }, [promoInfo]);

    return (
        <div className="price-wrapper sb-parent">
            <div className="inside-price-wrapper">
                <img className="sale-icon" src="https://assets.thdstatic.com/images/v1/Value-Pricing-Special-Buy.svg"></img>
                <div className="price">
                    <span className="price-dollar-sign">$</span>
                    <span className="price-dollars">{salePriceDollars}</span>
                    <span className="price-cents">{salePriceCents}</span>
                </div>
                <div className="sale-info">
                    <div className="sale-limit">Limit 3 per order</div>
                    <div className="sale-price-original"><s>${origPriceDollars}.{origPriceCents}</s></div>
                    <div className="sale-discount-amount">{`Save $${Math.floor(origPriceDollars - salePriceDollars)}.00 (${(1 - (salePriceDollars/origPriceDollars)).toFixed(2).split('.')[1]}%)`}</div>
                </div>
            </div>
        </div>
    )
}

export default Price;