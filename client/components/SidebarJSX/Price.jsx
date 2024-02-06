const Price =()=> {
    return (
        <div className="price-wrapper">
            <img className="sale-icon" src="https://assets.thdstatic.com/images/v1/Value-Pricing-Special-Buy.svg"></img>
            <div className="price">
                <span className="price-dollar-sign">$</span>
                <span className="price-dollars">179</span>
                <span className="price-cents">00</span>
            </div>
            <div className="sale-info">
                <div>Limit 3 per order</div>
                <div>
                    <div>$199.00</div>
                    <div>{'Save $20.00(10%)'}</div>
                </div>
            </div>
        </div>
    )
}

export default Price;